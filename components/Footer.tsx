export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container-page py-10 grid gap-6 sm:grid-cols-2 sm:items-center">
        <div>
          <p className="font-semibold text-brand-deep">ClearPath Digital</p>
          <p className="mt-1 text-sm text-brand-muted">
            Affordable websites. Clear customer journeys.
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-brand-muted sm:justify-end">
          <a href="#services" className="hover:text-brand-deep">Services</a>
          <a href="#how-it-works" className="hover:text-brand-deep">How It Works</a>
          <a href="#faq" className="hover:text-brand-deep">FAQ</a>
          <a href="#contact" className="hover:text-brand-deep">Contact</a>
        </nav>
      </div>
      <div className="border-t border-slate-100">
        <div className="container-page py-5 text-xs text-brand-muted">
          &copy; {new Date().getFullYear()} ClearPath Digital. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
