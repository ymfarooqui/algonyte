import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container-page py-10 grid gap-6 sm:grid-cols-2 sm:items-center">
        <div>
          <p className="font-semibold text-brand-deep">Farooqui Digital</p>
          <p className="mt-1 text-sm text-brand-muted">
            Affordable websites. Clear customer journeys.
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-brand-muted sm:justify-end">
          <Link href="/services" className="hover:text-brand-deep">Services</Link>
          <Link href="/how-it-works" className="hover:text-brand-deep">How It Works</Link>
          <Link href="/about" className="hover:text-brand-deep">About</Link>
          <Link href="/faq" className="hover:text-brand-deep">FAQ</Link>
          <Link href="/contact" className="hover:text-brand-deep">Contact</Link>
        </nav>
      </div>
      <div className="border-t border-slate-100">
        <div className="container-page py-5 text-xs text-brand-muted">
          &copy; {new Date().getFullYear()} Farooqui Digital. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
