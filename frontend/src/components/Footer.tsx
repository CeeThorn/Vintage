import Link from "next/link";

type FooterLink = {
  label: string;
  href: string;
};

type FooterColumnProps = {
  title: string;
  links: FooterLink[];
};

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div>
      <h5 className="font-headline font-bold text-on-background dark:text-stone-100 text-xs uppercase tracking-widest mb-6">
        {title}
      </h5>

      <ul className="space-y-4">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="font-body text-sm leading-6 text-on-surface-variant hover:text-primary dark:hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#f5f4ed] dark:bg-stone-900 w-full py-12 px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">

        {/* Brand */}
        <div className="md:col-span-2 lg:col-span-1">
          <div className="font-headline font-semibold text-on-background dark:text-stone-100 text-xl uppercase tracking-tighter mb-6">
            PrintWear
          </div>

          <p className="font-body text-sm leading-6 text-primary max-w-xs">
            Redefining custom apparel through the lens of luxury design and
            sustainable craftsmanship.
          </p>
        </div>

        {/* Collection */}
        <FooterColumn
          title="Collection"
          links={[
            { label: "Shirts", href: "/collection/shirts" },
            { label: "Sweaters", href: "/collection/sweaters" },
            { label: "Outerwear", href: "/collection/outerwear" },
            { label: "Accessories", href: "/collection/accessories" },
          ]}
        />

        {/* Company */}
        <FooterColumn
          title="Company"
          links={[
            { label: "Instagram", href: "https://instagram.com" },
            { label: "Twitter", href: "https://twitter.com" },
            { label: "Contact", href: "/contact" },
          ]}
        />

        {/* Legal */}
        <FooterColumn
          title="Legal"
          links={[
            { label: "Privacy", href: "/privacy" },
            { label: "Terms", href: "/terms" },
          ]}
        />

      </div>

      {/* Bottom strip */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-outline-variant/20 flex flex-col md:flex-row justify-between items-center gap-4">

        <span className="font-body text-xs text-on-surface-variant">
          © {new Date().getFullYear()} PrintWear Digital Boutique
        </span>

        <div className="flex gap-6">
          <span className="material-symbols-outlined text-on-surface-variant text-lg">
            payments
          </span>

          <span className="material-symbols-outlined text-on-surface-variant text-lg">
            public
          </span>
        </div>

      </div>
    </footer>
  );
}