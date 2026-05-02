"use client";

import { useState, FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const helpOptions = [
  "I need a new website",
  "I want to improve my current website",
  "I want a full website audit",
  "I need ongoing website care",
  "I am not sure yet",
];

const budgetOptions = [
  "Under $500",
  "$500–$1,000",
  "$1,000–$2,000",
  "$2,000+",
  "Not sure yet",
];

const labelClass = "block text-sm font-medium text-brand-ink mb-1.5";
const fieldClass =
  "w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-brand-ink placeholder:text-slate-400 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/30";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
    if (!endpoint) {
      setStatus("error");
      setErrorMsg(
        "Form is not yet connected. Set NEXT_PUBLIC_FORMSPREE_ENDPOINT to enable submissions."
      );
      return;
    }

    const data = Object.fromEntries(new FormData(e.currentTarget).entries());

    const email = String(data.email ?? "").trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setStatus("error");
      setErrorMsg("Please enter a valid email address so we can reply.");
      return;
    }

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => null);
        const detail =
          body?.errors?.[0]?.message ||
          body?.error ||
          `Request failed (${res.status})`;
        throw new Error(detail);
      }
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-brand-primary/30 bg-white p-8 shadow-sm">
        <h3 className="text-xl font-semibold text-brand-deep">Thanks. Message received.</h3>
        <p className="mt-3 text-brand-muted leading-relaxed">
          We&rsquo;ll review what you sent and get back to you within 1&ndash;2 business days with
          honest, practical next steps.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-medium text-brand-deep underline-offset-4 hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="name">Name</label>
          <input id="name" name="name" type="text" required className={fieldClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required className={fieldClass} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="business">Business name</label>
          <input id="business" name="business" type="text" className={fieldClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="website">Website URL</label>
          <input
            id="website"
            name="website"
            type="url"
            placeholder="https://"
            className={fieldClass}
          />
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="help">What do you need help with?</label>
        <select id="help" name="help" className={fieldClass} defaultValue="">
          <option value="" disabled>Select an option</option>
          {helpOptions.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
      </div>

      <div>
        <label className={labelClass} htmlFor="budget">Budget range</label>
        <select id="budget" name="budget" className={fieldClass} defaultValue="">
          <option value="" disabled>Select a range</option>
          {budgetOptions.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
      </div>

      <div>
        <label className={labelClass} htmlFor="message">Message</label>
        <textarea id="message" name="message" rows={5} required className={fieldClass} />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>

      {status === "error" && (
        <p role="alert" className="text-sm text-red-600">
          {errorMsg}
        </p>
      )}
    </form>
  );
}
