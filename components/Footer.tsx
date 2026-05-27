import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-brand-line bg-brand-paper">

      {/* ── Instagram strip ── */}
      <div className="border-b border-brand-line">
        <div className="container-page py-4 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-6 text-center sm:text-left">
          <div className="flex items-center gap-3">
            {/* Instagram gradient icon */}
            <svg
              width="20"
              height="20"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="shrink-0"
            >
              <defs>
                <radialGradient id="ig-footer-bg" cx="30%" cy="107%" r="150%" fx="30%" fy="107%">
                  <stop offset="0%" stopColor="#ffd600" />
                  <stop offset="10%" stopColor="#ff7a00" />
                  <stop offset="50%" stopColor="#ff0069" />
                  <stop offset="100%" stopColor="#d300c5" />
                </radialGradient>
                <radialGradient id="ig-footer-top" cx="70%" cy="0%" r="80%" fx="70%" fy="0%">
                  <stop offset="0%" stopColor="#4d5bd4" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#4d5bd4" stopOpacity="0" />
                </radialGradient>
              </defs>
              <rect width="48" height="48" rx="12" fill="url(#ig-footer-bg)" />
              <rect width="48" height="48" rx="12" fill="url(#ig-footer-top)" />
              <rect x="11" y="11" width="26" height="26" rx="6" stroke="white" strokeWidth="2.5" fill="none" />
              <circle cx="24" cy="24" r="6.5" stroke="white" strokeWidth="2.5" fill="none" />
              <circle cx="34" cy="14" r="1.8" fill="white" />
            </svg>
            <p className="text-sm text-brand-muted leading-snug">
              Follow for tips, case studies, and behind-the-scenes updates from the AlgoNyte team.
            </p>
          </div>
          <a
            href="https://www.instagram.com/algonyte_ai"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow AlgoNyte on Instagram (opens in new tab)"
            className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-brand-deep px-4 py-2 text-sm font-medium text-brand-soft shadow-soft hover:bg-brand-violet transition-colors"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <defs>
                <radialGradient id="ig-btn-bg" cx="30%" cy="107%" r="150%" fx="30%" fy="107%">
                  <stop offset="0%" stopColor="#ffd600" />
                  <stop offset="10%" stopColor="#ff7a00" />
                  <stop offset="50%" stopColor="#ff0069" />
                  <stop offset="100%" stopColor="#d300c5" />
                </radialGradient>
                <radialGradient id="ig-btn-top" cx="70%" cy="0%" r="80%" fx="70%" fy="0%">
                  <stop offset="0%" stopColor="#4d5bd4" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#4d5bd4" stopOpacity="0" />
                </radialGradient>
              </defs>
              <rect width="48" height="48" rx="12" fill="url(#ig-btn-bg)" />
              <rect width="48" height="48" rx="12" fill="url(#ig-btn-top)" />
              <rect x="11" y="11" width="26" height="26" rx="6" stroke="white" strokeWidth="2.5" fill="none" />
              <circle cx="24" cy="24" r="6.5" stroke="white" strokeWidth="2.5" fill="none" />
              <circle cx="34" cy="14" r="1.8" fill="white" />
            </svg>
            Follow @algonyte_ai
          </a>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="container-page py-6 grid grid-cols-1 sm:grid-cols-3 items-center gap-4 text-center sm:text-left">
        <div className="flex items-center gap-2.5 justify-center sm:justify-start">
          <Image src="/algonyte-labs-logo.png" alt="AlgoNyte logo" width={96} height={96} unoptimized className="h-10 w-10 object-contain" />
          <p className="font-medium text-brand-deep tracking-tight">AlgoNyte</p>
        </div>
        <p className="font-mono text-[11px] text-brand-muted sm:text-center tracking-wide">
          &copy; {new Date().getFullYear()} AlgoNyte. All rights reserved.
        </p>
        <nav className="flex justify-center sm:justify-end gap-6 text-sm text-brand-muted">
          <Link href="/about" className="nav-link hover:text-brand-deep">
            About
          </Link>
          <Link href="/privacy" className="nav-link hover:text-brand-deep">
            Privacy
          </Link>
          <Link href="/terms" className="nav-link hover:text-brand-deep">
            Terms
          </Link>
        </nav>
      </div>

    </footer>
  );
}
