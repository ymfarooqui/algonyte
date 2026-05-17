import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-brand-line bg-brand-paper">
      <div className="container-page py-6 grid grid-cols-1 sm:grid-cols-3 items-center gap-4 text-center sm:text-left">
        <div className="flex items-center gap-2.5 justify-center sm:justify-start">
          <Image src="/logo-mark.png" alt="Algonyte Labs logo" width={96} height={96} className="h-10 w-10 object-contain" />
          <p className="font-medium text-brand-deep tracking-tight">Algonyte Labs</p>
        </div>
        <p className="font-mono text-[11px] text-brand-muted sm:text-center tracking-wide">
          &copy; {new Date().getFullYear()} Algonyte Labs. All rights reserved.
        </p>
        <nav className="flex justify-center sm:justify-end gap-6 text-sm text-brand-muted">
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
