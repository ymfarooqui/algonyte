import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container-page py-8 grid grid-cols-1 sm:grid-cols-3 items-center gap-4 text-center sm:text-left">
        <div className="flex items-center gap-2 justify-center sm:justify-start">
          <Image src="/logo-mark.png" alt="" width={28} height={28} className="h-7 w-7 object-contain" />
          <p className="font-semibold text-brand-deep">Algonyte Labs</p>
        </div>
        <p className="text-xs text-brand-muted sm:text-center">
          &copy; {new Date().getFullYear()} Algonyte Labs. All rights reserved.
        </p>
        <nav className="flex justify-center sm:justify-end gap-5 text-sm text-brand-muted">
          <Link href="/privacy" className="hover:text-brand-deep">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-brand-deep">
            Terms
          </Link>
        </nav>
      </div>
    </footer>
  );
}
