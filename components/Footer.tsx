export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container-page py-8 grid grid-cols-1 sm:grid-cols-3 items-center gap-3 text-center sm:text-left">
        <p className="font-semibold text-brand-deep">Farooqui Digital</p>
        <p className="text-xs text-brand-muted sm:text-center">
          &copy; {new Date().getFullYear()} Farooqui Digital. All rights reserved.
        </p>
        <p className="text-sm text-brand-muted sm:text-right">
          Affordable websites. Clear customer journeys.
        </p>
      </div>
    </footer>
  );
}
