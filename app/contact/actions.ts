"use server";

// Custom intake form submission. Posts to GoHighLevel Contacts API V2.
// Token lives in LC_API_TOKEN (server-only). Sub-account in LC_LOCATION_ID.

const LC_BASE = "https://services.leadconnectorhq.com";
const LC_CONTACTS_ENDPOINT = `${LC_BASE}/contacts/`;
const LC_API_VERSION = "2021-07-28";

function lcHeaders(token: string): HeadersInit {
  return {
    Authorization: `Bearer ${token}`,
    Version: LC_API_VERSION,
    "Content-Type": "application/json",
    Accept: "application/json",
  };
}

async function addTagsToContact(
  token: string,
  contactId: string,
  tags: string[],
): Promise<void> {
  if (tags.length === 0) return;
  try {
    await fetch(`${LC_BASE}/contacts/${contactId}/tags`, {
      method: "POST",
      headers: lcHeaders(token),
      body: JSON.stringify({ tags }),
    });
  } catch (err) {
    console.error("Intake form: tag attach failed (non-fatal)", err);
  }
}

async function addNoteToContact(
  token: string,
  contactId: string,
  body: string,
): Promise<void> {
  if (!body) return;
  try {
    await fetch(`${LC_BASE}/contacts/${contactId}/notes`, {
      method: "POST",
      headers: lcHeaders(token),
      body: JSON.stringify({ body }),
    });
  } catch (err) {
    console.error("Intake form: note attach failed (non-fatal)", err);
  }
}

// Maps "What's broken?" checkbox values to GHL tag names.
const PROBLEM_TAGS: Record<string, string> = {
  site: "presence-interest",
  leads: "awake-interest",
  google: "climbing-interest",
  pipeline: "scale-interest",
  automate: "intake-automation-interest",
};

// Maps preferred-contact radio value to a tag.
const CONTACT_TAGS: Record<string, string> = {
  text: "prefer-text",
  call: "prefer-call",
  email: "prefer-email",
};

export type IntakeResult =
  | { ok: true }
  | { ok: false; error: string; fieldErrors?: Record<string, string> };

function getString(formData: FormData, key: string): string {
  const v = formData.get(key);
  return typeof v === "string" ? v.trim() : "";
}

function getStrings(formData: FormData, key: string): string[] {
  return formData.getAll(key).filter((v): v is string => typeof v === "string");
}

function isEmail(s: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

function digitsOnly(s: string): string {
  return s.replace(/\D/g, "");
}

export async function submitIntake(formData: FormData): Promise<IntakeResult> {
  // Honeypot: a real user never touches this field.
  if (getString(formData, "website")) {
    // Silently report success to the bot.
    return { ok: true };
  }

  const firstName = getString(formData, "firstName");
  const lastName = getString(formData, "lastName");
  const companyName = getString(formData, "companyName");
  const email = getString(formData, "email");
  const phoneRaw = getString(formData, "phone");
  const phone = digitsOnly(phoneRaw);
  const preferred = getString(formData, "preferredContact");
  const problems = getStrings(formData, "problems");
  const message = getString(formData, "message");

  const fieldErrors: Record<string, string> = {};
  if (!firstName) fieldErrors.firstName = "Required.";
  if (!lastName) fieldErrors.lastName = "Required.";
  if (!companyName) fieldErrors.companyName = "Required.";
  if (!email) fieldErrors.email = "Required.";
  else if (!isEmail(email)) fieldErrors.email = "Doesn't look like a valid email.";
  if (!phoneRaw) fieldErrors.phone = "Required.";
  else if (phone.length < 10) fieldErrors.phone = "Needs at least 10 digits.";
  if (!preferred || !CONTACT_TAGS[preferred]) {
    fieldErrors.preferredContact = "Pick how we should reach out.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return { ok: false, error: "Please fix the highlighted fields.", fieldErrors };
  }

  const token = process.env.LC_API_TOKEN;
  const locationId = process.env.LC_LOCATION_ID;

  if (!token || !locationId) {
    console.error("Intake form: LC_API_TOKEN or LC_LOCATION_ID is not set.");
    return {
      ok: false,
      error:
        "Our intake system is having a moment. Book a call directly — link below.",
    };
  }

  const tags = ["new-intake"];
  for (const p of problems) {
    if (PROBLEM_TAGS[p]) tags.push(PROBLEM_TAGS[p]);
  }
  if (preferred && CONTACT_TAGS[preferred]) tags.push(CONTACT_TAGS[preferred]);

  const payload = {
    locationId,
    firstName,
    lastName,
    email,
    phone,
    companyName,
    source: "algonyte.com /contact intake form",
    tags,
  };

  try {
    const res = await fetch(LC_CONTACTS_ENDPOINT, {
      method: "POST",
      headers: lcHeaders(token),
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      const created = (await res.json().catch(() => null)) as
        | { contact?: { id?: string } }
        | null;
      const contactId = created?.contact?.id;
      if (contactId) {
        await addNoteToContact(token, contactId, message);
      }
      return { ok: true };
    }

    // 400 with "duplicated contacts" means the email already exists in this
    // sub-account. GHL returns the existing contactId in meta — attach the
    // new tags and (optional) note to that contact instead of failing the
    // submission. From the user's perspective the intake worked.
    if (res.status === 400) {
      const errorBody = (await res.json().catch(() => null)) as
        | { message?: string; meta?: { contactId?: string } }
        | null;
      const existingId = errorBody?.meta?.contactId;
      const isDuplicate =
        typeof errorBody?.message === "string" &&
        errorBody.message.toLowerCase().includes("duplicat");
      if (isDuplicate && existingId) {
        await addTagsToContact(token, existingId, tags);
        await addNoteToContact(token, existingId, message);
        return { ok: true };
      }
      console.error(
        `Intake form: GHL contact creation failed (400): ${JSON.stringify(errorBody)}`,
      );
      return {
        ok: false,
        error:
          "Couldn't reach our intake system right now. Try again or book a call directly.",
      };
    }

    const detail = await res.text().catch(() => "");
    console.error(
      `Intake form: GHL contact creation failed (${res.status}): ${detail}`,
    );
    return {
      ok: false,
      error:
        "Couldn't reach our intake system right now. Try again or book a call directly.",
    };
  } catch (err) {
    console.error("Intake form: network error reaching GHL", err);
    return {
      ok: false,
      error:
        "Couldn't reach our intake system right now. Try again or book a call directly.",
    };
  }
}
