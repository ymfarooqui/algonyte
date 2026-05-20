"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import { useBooking } from "@/components/BookingModal";
import { submitIntake, type IntakeResult } from "./actions";

const PROBLEMS = [
  { value: "site", label: "I need a site" },
  { value: "leads", label: "I'm losing leads (calls, texts, DMs)" },
  { value: "google", label: "I'm not showing up on Google" },
  { value: "pipeline", label: "I need a predictable lead pipeline" },
  { value: "automate", label: "I need to automate my intake process" },
] as const;

const CONTACT_METHODS = [
  { value: "text", label: "Text" },
  { value: "call", label: "Call" },
  { value: "email", label: "Email" },
] as const;

type ContactFormProps = {
  onSubmitted?: () => void;
  onReset?: () => void;
};

export default function ContactForm({ onSubmitted, onReset }: ContactFormProps = {}) {
  const { open } = useBooking();
  const [pending, startTransition] = useTransition();
  const [result, setResult] = useState<IntakeResult | null>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    startTransition(async () => {
      const r = await submitIntake(formData);
      setResult(r);
      if (r.ok) {
        e.currentTarget?.reset?.();
        onSubmitted?.();
      }
    });
  };

  const handleReset = () => {
    setResult(null);
    onReset?.();
  };

  if (result?.ok) {
    return (
      <div className="rounded-2xl border border-brand-primary/30 bg-gradient-to-br from-brand-accent/40 via-white to-white p-8 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-primary">
          You&rsquo;re in
        </p>
        <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-brand-deep">
          Let&rsquo;s build the engine.
        </h2>
        <p className="mt-4 text-brand-muted leading-relaxed">
          Within one business day, we&rsquo;ll reach out on your preferred
          channel with what we&rsquo;d ship first and the lever that moves
          your numbers fastest. Your business is about to start running
          without you.
        </p>
        <p className="mt-3 text-brand-muted leading-relaxed">
          Want to talk it through live now? Grab a 20-minute slot.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={open}
            className="inline-flex items-center justify-center rounded-lg bg-brand-deep px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-deep/90 transition"
          >
            Book a 20-minute call
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center justify-center rounded-lg border border-slate-200 px-5 py-2.5 text-sm font-medium text-brand-deep hover:bg-brand-soft transition"
          >
            Send another
          </button>
        </div>
      </div>
    );
  }

  const errors = !result?.ok && result?.fieldErrors ? result.fieldErrors : {};
  const topError = !result?.ok && result?.error;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
      <form onSubmit={onSubmit} noValidate className="space-y-5">
        {/* Honeypot — hidden from humans, visible to bots */}
        <label className="sr-only" aria-hidden="true">
          Website (leave blank)
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            defaultValue=""
          />
        </label>

        <div className="grid gap-4 sm:grid-cols-2">
          <Field
            name="firstName"
            label="First name"
            error={errors.firstName}
            required
          />
          <Field
            name="lastName"
            label="Last name"
            error={errors.lastName}
            required
          />
        </div>

        <Field
          name="companyName"
          label="Business name"
          error={errors.companyName}
          required
        />

        <div className="grid gap-4 sm:grid-cols-2">
          <Field
            name="email"
            label="Email"
            type="email"
            error={errors.email}
            required
          />
          <Field
            name="phone"
            label="Phone"
            type="tel"
            error={errors.phone}
            required
          />
        </div>

        <fieldset>
          <legend className="text-sm font-medium text-brand-deep">
            What&rsquo;s broken? <span className="text-brand-muted font-normal">(optional, pick any)</span>
          </legend>
          <div className="mt-2 grid gap-2">
            {PROBLEMS.map((p) => (
              <label
                key={p.value}
                className="flex items-start gap-3 rounded-lg border border-slate-200 p-3 text-sm hover:bg-brand-soft cursor-pointer transition"
              >
                <input
                  type="checkbox"
                  name="problems"
                  value={p.value}
                  className="mt-0.5 h-4 w-4 rounded border-slate-300 text-brand-primary focus:ring-brand-primary"
                />
                <span className="text-brand-ink">{p.label}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend className="text-sm font-medium text-brand-deep">
            How should we reach out? <span className="text-red-600">*</span>
          </legend>
          <div className="mt-2 flex flex-wrap gap-3">
            {CONTACT_METHODS.map((m) => (
              <label
                key={m.value}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm hover:bg-brand-soft cursor-pointer transition"
              >
                <input
                  type="radio"
                  name="preferredContact"
                  value={m.value}
                  className="h-4 w-4 border-slate-300 text-brand-primary focus:ring-brand-primary"
                />
                <span className="text-brand-ink">{m.label}</span>
              </label>
            ))}
          </div>
          {errors.preferredContact && (
            <p className="mt-1 text-xs text-red-600">{errors.preferredContact}</p>
          )}
        </fieldset>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-brand-deep"
          >
            Anything else?{" "}
            <span className="text-brand-muted font-normal">(optional)</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="mt-2 block w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-brand-ink placeholder:text-brand-muted/60 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/30 focus:outline-none transition"
            placeholder="Context, timeline, anything specific you want us to know."
          />
        </div>

        {topError && (
          <div
            role="alert"
            className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
          >
            {topError}{" "}
            <Link
              href="/book"
              className="font-semibold underline underline-offset-2"
            >
              Book a call instead &rarr;
            </Link>
          </div>
        )}

        <button
          type="submit"
          disabled={pending}
          className="inline-flex w-full items-center justify-center rounded-lg bg-brand-deep px-6 py-3 text-base font-semibold text-white hover:bg-brand-deep/90 disabled:opacity-60 disabled:cursor-not-allowed transition"
        >
          {pending ? "Sending..." : "Send it"}
        </button>

        <p className="text-xs text-brand-muted text-center">
          We reply within one business day. Or{" "}
          <button
            type="button"
            onClick={open}
            className="underline underline-offset-2 hover:text-brand-deep"
          >
            book a 20-minute call
          </button>{" "}
          right now.
        </p>
      </form>
    </div>
  );
}

function Field({
  name,
  label,
  type = "text",
  error,
  required,
}: {
  name: string;
  label: string;
  type?: string;
  error?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-brand-deep"
      >
        {label} {required && <span className="text-red-600">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoCompleteFor(name)}
        className={`mt-2 block w-full rounded-lg border bg-white px-3 py-2 text-sm text-brand-ink placeholder:text-brand-muted/60 focus:ring-2 focus:ring-brand-primary/30 focus:outline-none transition ${
          error
            ? "border-red-300 focus:border-red-500"
            : "border-slate-200 focus:border-brand-primary"
        }`}
      />
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
}

function autoCompleteFor(name: string): string {
  switch (name) {
    case "firstName":
      return "given-name";
    case "lastName":
      return "family-name";
    case "companyName":
      return "organization";
    case "email":
      return "email";
    case "phone":
      return "tel";
    default:
      return "off";
  }
}
