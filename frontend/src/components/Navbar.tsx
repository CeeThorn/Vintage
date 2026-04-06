import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background backdrop-blur-md flex justify-between items-center px-8 py-6">
      
      {/* Brand */}
      <div className="font-headline text-xl font-bold tracking-tighter text-on-background uppercase">
        PrintWear
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-12 items-center">

        <div className="flex gap-8">

          <Link
            href="/"
            className="font-headline uppercase tracking-widest text-[11px] text-on-background font-bold border-b-2 border-primary pb-1 hover:-translate-y-0.5 transition"
          >
            Home
          </Link>

          <Link
            href="/explore"
            className="font-headline uppercase tracking-widest text-[11px] text-on-surface-variant hover:text-on-background hover:-translate-y-0.5 transition"
          >
            Explore
          </Link>

          <Link
            href="/cart"
            className="font-headline uppercase tracking-widest text-[11px] text-on-surface-variant hover:text-on-background hover:-translate-y-0.5 transition"
          >
            Cart
          </Link>

          <Link
            href="/signin"
            className="font-headline uppercase tracking-widest text-[11px] text-on-surface-variant hover:text-on-background hover:-translate-y-0.5 transition"
          >
            Sign In
          </Link>

        </div>

        <div className="flex gap-4">
          <span className="material-symbols-outlined text-primary">
            shopping_bag
          </span>
          <span className="material-symbols-outlined text-primary">
            account_circle
          </span>
        </div>

      </div>

      {/* Mobile Menu Icon */}
      <span className="material-symbols-outlined md:hidden cursor-pointer">
        menu
      </span>

    </nav>
  );
}