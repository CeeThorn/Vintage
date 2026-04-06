
import Link from "next/link";


const workflowSteps = [
  {
    id: "01",
    icon: "edit_square",
    title: "Design",
    description:
      "Upload your vision or create from curated studio assets.",
  },
  {
    id: "02",
    icon: "print",
    title: "Print",
    description:
      "High-fidelity sustainable printing preserving fabric quality.",
  },
  {
    id: "03",
    icon: "local_shipping",
    title: "Arrive",
    description:
      "Hand-inspected garments shipped in eco-conscious packaging.",
  },
];

export default function Home() {
  return (
    <main className="selection:bg-secondary-container selection:text-on-secondary-container">

      {/* NAVBAR */}

      <nav className="fixed top-0 left-0 right-0 z-50 bg-background backdrop-blur-md flex justify-between items-center px-8 py-6">

        <div className="font-headline text-xl font-bold tracking-tighter text-on-background uppercase">
          PrintWear
        </div>

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

        <span className="material-symbols-outlined md:hidden">
          menu
        </span>

      </nav>


      {/* HERO */}

      <section className="relative min-h-[921px] flex items-center px-8 md:px-20 overflow-hidden bg-background pt-32">

        <div className="z-10 max-w-2xl">

          <span className="font-label uppercase tracking-widest text-[11px] text-on-surface-variant mb-6 block">
            Premium Custom Garments
          </span>

          <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter text-on-background mb-8 leading-[1.1]">
            The Curated <br />
            <span className="text-primary italic font-normal">
              Canvas.
            </span>
          </h1>

          <p className="font-body text-on-surface-variant text-lg leading-relaxed mb-10 max-w-md">
            Transforming custom printing into a luxury atelier experience.
          </p>

          <div className="flex gap-4 flex-wrap">

            <button className="bg-primary text-on-primary px-8 py-3 font-medium hover:bg-primary-dim transition">
              Start Designing
            </button>

            <button className="bg-secondary-container text-on-secondary-container px-8 py-3 font-medium hover:-translate-y-0.5 transition">
              View Lookbook
            </button>

          </div>

        </div>

      </section>


      {/* WORKFLOW */}

      <section className="py-24 bg-surface-container-low px-8 md:px-20">

        <div className="max-w-7xl mx-auto">

          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">

            <div>

              <span className="font-label uppercase tracking-widest text-[11px] text-on-surface-variant mb-4 block">
                The Process
              </span>

              <h2 className="font-headline text-4xl font-bold text-on-background">
                Atelier Workflow
              </h2>

            </div>

            <p className="font-body text-on-surface-variant max-w-xs text-sm">
              A seamless journey from concept to premium garment delivery.
            </p>

          </div>


          <div className="grid md:grid-cols-3 gap-16">

            {workflowSteps.map(step => (
              <div key={step.id} className="group">

                <div className="text-[5rem] font-headline font-extrabold text-outline-variant/20 mb-[-2rem] group-hover:text-primary/10 transition">
                  {step.id}
                </div>

                <div className="relative z-10">

                  <div className="w-12 h-12 flex items-center justify-center bg-surface-container-lowest mb-6">

                    <span className="material-symbols-outlined text-primary">
                      {step.icon}
                    </span>

                  </div>

                  <h3 className="font-headline text-xl font-bold mb-4">
                    {step.title}
                  </h3>

                  <p className="text-on-surface-variant leading-relaxed">
                    {step.description}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* CTA */}

      <section className="py-32 bg-surface-container-high/40 px-8">

        <div className="max-w-4xl mx-auto bg-surface-container-lowest p-12 md:p-20 text-center relative">

          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-background flex items-center justify-center">

            <span className="material-symbols-outlined text-primary scale-125">
              auto_awesome
            </span>

          </div>

          <h2 className="font-headline text-4xl font-extrabold tracking-tighter text-on-background mb-6 uppercase">
            Elevate Your Presence
          </h2>

          <p className="font-body text-on-surface-variant text-lg mb-10 max-w-lg mx-auto">
            Join 5,000+ teams creating premium custom apparel.
          </p>

          <form className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">

            <input
              type="email"
              placeholder="atelier@yourbrand.com"
              className="flex-grow bg-surface-container-low px-6 py-4 outline-none"
            />

            <button className="bg-primary text-on-primary px-8 py-4 font-bold text-xs uppercase tracking-widest hover:bg-primary-dim transition">
              Join Now
            </button>

          </form>

        </div>

      </section>


      {/* FOOTER */}

      <footer className="bg-surface-container-low py-12 px-8">

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">

          <span className="font-body text-xs text-on-surface-variant">
            © {new Date().getFullYear()} PrintWear
          </span>

          <div className="flex gap-6">

            <span className="material-symbols-outlined text-on-surface-variant">
              payments
            </span>

            <span className="material-symbols-outlined text-on-surface-variant">
              public
            </span>

          </div>

        </div>

      </footer>

    </main>
  );
}