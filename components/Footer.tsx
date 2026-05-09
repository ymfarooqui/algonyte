import Link from "next/link";
import { social } from "@/lib/constants";

const cols = [
  {
    title: "Services",
    links: [
      { href: "/services", label: "The platform" },
      { href: "/pricing", label: "Pricing" },
      { href: "/services", label: "Custom builds" },
      { href: "/services", label: "Marketing & ads" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/insights", label: "Insights" },
      { href: "/contact", label: "Contact" },
      { href: "/contact", label: "Book a call" },
    ],
  },
];

const linkedinReady = social.linkedin && !social.linkedin.startsWith("[");

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container-page py-14 grid gap-10 grid-cols-2 md:grid-cols-4">
        <div className="col-span-2 md:col-span-2">
          <p className="font-semibold text-brand-deep">Farooqui Digital</p>
          <p className="mt-2 text-sm text-brand-muted max-w-xs">
            AI agents, automation, and marketing for small businesses.
          </p>
          {linkedinReady && (
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="mt-4 inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 text-brand-muted hover:text-brand-deep hover:border-brand-deep transition"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v14H.22zM8.5 8h4.37v1.92h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.47 3.04 5.47 7v7.44h-4.56V15.4c0-1.7-.03-3.9-2.38-3.9-2.39 0-2.75 1.86-2.75 3.78V22H8.5z" />
              </svg>
            </a>
          )}
        </div>

        {cols.map((col) => (
          <div key={col.title}>
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-deep mb-4">
              {col.title}
            </p>
            <ul className="space-y-2.5">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-brand-muted hover:text-brand-deep transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-slate-200">
        <div className="container-page py-5 text-xs text-brand-muted text-center sm:text-left">
          © {new Date().getFullYear()} Farooqui Digital. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
