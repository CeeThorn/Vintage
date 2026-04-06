import Image from "next/image";
import Navbar from "../../components/Navbar";

const designTemplates = [
  {
    title: "The Archetype Monogram",
    desc: "Refined typography for architectural statements.",
    price: "$42.00",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_W_nBZySS0lcbEVaNPCTwfKBmgGrkYaZv4RcIvaoNNtWGj0tcWyTCJguMtbTkVVFuaKdIoN63udpygeYgs7LT7ydpG1aHXi35bmqKq_-1lk43rFfICQyRJ2wDbkNkUjwIgLEa3TeChEzRgQqqEnRJvdNTtldTwuj9Cht6BC4JGhPuO4TCMhwDn4ZiT79e4fiJF35vva05Msnwzw2khfQpsX5-8VQ1h7vJWrnrSSSscWQ5kBXoWeg3yGizjKshPsTuK4oKokHB33c-",
    label: "Bestseller",
    large: true,
  },
  {
    title: "Neo-Brutalist Series",
    desc: "Heavy-duty visual concepts.",
    price: "$58.00",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZBOE7J-qaPaBThSmIh1UwtmZ_Bxay4taSRU44UcxRcu8gBeKplGwC5RXzmwyFet-VXYLIWBiT-PVohjtT5cjAQRFezxJevVdyXSMlkVKomxFAJ7l8rlSqJcu9yCY-kGS94G5gahu-mFypTKwU4WwqkmayZaEvmisuf8ubaOqdCyQDlduR0wPCSjCQ1uWQ8JVk8yE6A5LpZgvMMjzRFWl8FsIREI7yB2bIScLo6xY8rpSKYdSXx85FnuOoYD8wIyQGBHmFQvYHlpKN",
  },
  {
    title: "Abstract Studio V1",
    desc: "Hand-sketched fluid geometries.",
    price: "$45.00",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAtfQeOyhc5Tl7S_dvX6kSc6snGEGzDw4T1aaBizTwueSvGPnQdz1AYacGcSPPWLcF5oYYvFVuqRzCNSzqFH5hSJw0UAa9PxrfyrcTq4yOIzN1y5C0pggVhJjWlKE3NdNirViS6AraSlv68ibAl3w4UZ4oK-ZPIawjQrJHlAjPMFFg88cjGDuEXzvPodfcJvNKOM1ia67vd7T5kmLvjsWlFJDBf9RHxcySuFc-VAEOBwyN8RgCLKpkF4mauR7GTqbYpQd8P4RSVdqU_",
  },
];

const blankBases = [
  {
    title: "The Classic Tee",
    desc: "Heavyweight organic cotton, structured fit.",
    price: "$28.00",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZX4NGpTgpxWW1kvNF44_ZPMPIAdc_i6nL1dZIjZtfo9NbIy-FpLuSh9xUbEuXKiZeAtxXRIGq9j-Y_TAUv9ARP2Uu_jSWu_8Qj0DSwKm13p0LyTtuZ9MnCbEbovnJOM-UFvkjvnfO36VkW4nBfrdlfDxywe18g-Dmk8PA75pEjbaz5FOSLCl8yaf_NNV4pmpweG6XJULe5ikup177OnJF2vKumrK8tx8tfTnpoDHVTS0jBNnc_XBL7B1vQrweEDZLBZZvoe88NUbl",
    label: "220GSM / Single Jersey",
  },
  {
    title: "The Oversized Hoodie",
    desc: "Double-lined hood, dropped shoulder.",
    price: "$64.00",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuACkk5I7Sv4ewSjV06_-8ZeiwXQjUvHZIHszXGebJ8_NuiuVCjvvvSkn8bdfbr8sYvw5AquWCQ_vl8T5tpIsTPecJPiTgMnslZ3LnNe7U4axS8_NHOjV9EecQIb9FQ4FV-indcQSMPDhq67CEYVTvl5azqxuBuw2gv52__w-nw3GnMBopLTRCHGC2W_-8YUDAt3PL4-UtoqrZUbdkSnIUbJMehvfye071azXTg9UL8aJcrWBMDGm7Hpta61EVrB3UphMXSUdXeO13v8",
    label: "450GSM / French Terry",
  },
  {
    title: "Studio Sweatshirt",
    desc: "Boxy silhouette, vintage wash feel.",
    price: "$52.00",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAzSQDzNdNjhNwlzXEkdEq5_IQ4NY_Z-G-mpaE6Rwdc6qzsrWYDpppt9sPbFCQ3Z3mbnMJOuZrp-YtsGW8eiL3Q9UFjQ4y3xx4zbfJ765UJivFwAwDCyLQRMzkwW3CwiI2pchCzkU014ckhgiWUHmZmirIgQsefu0BSkHBeIv84VW3fzARwafZ1USAY8lDkoq-Fj0kpjpV_7Mq9S36Ew7tLLYAFE17bg1AdqB-xwQaF9rE_f1hF0HE8S8YuzYlYl46YOFiC41eM6skM",
    label: "380GSM / Brushed Back",
  },
  {
    title: "Essential Slim Tee",
    desc: "Long-staple cotton for silky feel.",
    price: "$32.00",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAaVvS_D_JgHhGsXCWDBiUI987Dwk7PKel69H-VhFHcc-wlSplN_8jSCuRxrGQEq2i_XCUbidvcxhDSDYyeBY3HWRpKLmbGxnb3XHuYr1Ba2-GrCC3zniVCrpBHlq2REVqGOLQ6hj_HX8xI2XKw9V0aCYCX3OQzBfp0JCeohgu16X2mR2v--sjJ4WSOj5BOeALJNlb71cRAosGn3ClcdjDVBCMycafNWgT9IlmS5IY1InQhkBt4A2CqOHpPTOaMmMdfMoiQGa6U128m",
    label: "180GSM / Supima Cotton",
  },
];

export default function ExplorePage() {
  return (
    <div>
      <Navbar />

      <main className="max-w-screen-2xl mx-auto px-8 pt-32 pb-32">
        {/* Hero */}
        <header className="mb-24 flex flex-col md:flex-row items-end justify-between gap-8">
          <div className="max-w-2xl">
            <span className="font-label text-[0.6875rem] uppercase tracking-[0.2em] text-on-surface-variant mb-4 block">
              The Digital Atelier
            </span>
            <h1 className="font-headline text-5xl md:text-7xl font-extralight tracking-tighter leading-none mb-8 text-on-surface">
              Explore the <span className="italic">Collection</span>
            </h1>
            <p className="font-body text-lg text-on-surface-variant leading-relaxed max-w-lg">
              A curated selection of archival silhouettes and ready-to-refine
              templates. Each piece is engineered for longevity and crafted from
              premium high-density fabrics.
            </p>
          </div>
        </header>

        {/* Filters */}
        <section className="mb-16 border-t border-outline-variant/10 pt-8 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="flex flex-wrap gap-x-12 gap-y-6">
            <div className="space-y-3">
              <span className="font-label text-[0.65rem] uppercase tracking-widest text-on-surface-variant/70">
                Template Style
              </span>
              <div className="flex gap-6">
                <button className="font-body text-sm font-medium border-b border-on-surface pb-1">
                  All Styles
                </button>
                <button className="font-body text-sm text-on-surface-variant hover:text-on-surface transition-colors pb-1">
                  Minimal
                </button>
                <button className="font-body text-sm text-on-surface-variant hover:text-on-surface transition-colors pb-1">
                  Bold
                </button>
                <button className="font-body text-sm text-on-surface-variant hover:text-on-surface transition-colors pb-1">
                  Team
                </button>
              </div>
            </div>

            <div className="space-y-3">
              <span className="font-label text-[0.65rem] uppercase tracking-widest text-on-surface-variant/70">
                Apparel Type
              </span>
              <div className="flex gap-6">
                <button className="font-body text-sm text-on-surface-variant hover:text-on-surface transition-colors pb-1">
                  Tees
                </button>
                <button className="font-body text-sm text-on-surface-variant hover:text-on-surface transition-colors pb-1">
                  Hoodies
                </button>
                <button className="font-body text-sm text-on-surface-variant hover:text-on-surface transition-colors pb-1">
                  Sweats
                </button>
              </div>
            </div>
          </div>

          <div className="relative w-full lg:w-72">
            <input
              type="text"
              placeholder="Search the archive..."
              className="w-full bg-transparent border-b border-outline-variant/30 py-2 focus:border-on-surface focus:ring-0 text-sm font-body outline-none transition-colors"
            />
            <span className="material-symbols-outlined absolute right-0 top-2 text-on-surface-variant">
              search
            </span>
          </div>
        </section>

        {/* Design Templates */}
        <section className="mb-32">
          <div className="flex items-baseline justify-between mb-12">
            <h2 className="font-headline text-2xl font-medium tracking-tight">
              Design Templates
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
            {designTemplates.map((item, i) => (
              <div
                key={i}
                className={`${
                  item.large ? "md:col-span-7 lg:col-span-8" : "md:col-span-5 lg:col-span-4"
                } group`}
              >
                <div className="relative aspect-[16/10] md:aspect-[4/5] bg-surface-container overflow-hidden rounded-sm mb-6">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {item.label && (
                    <div className="absolute bottom-6 left-6 flex gap-2">
                      <span className="bg-surface-container-lowest/90 backdrop-blur-sm px-3 py-1 text-[0.6rem] uppercase tracking-widest font-label">
                        {item.label}
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex justify-between items-start px-1">
                  <div>
                    <h3 className="font-headline text-xl mb-1 group-hover:underline underline-offset-4 decoration-1">
                      {item.title}
                    </h3>
                    <p className="font-body text-sm text-on-surface-variant italic">
                      {item.desc}
                    </p>
                  </div>
                  <p className="font-body font-medium">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Blank Bases */}
        <section>
          <div className="flex items-baseline justify-between mb-12">
            <h2 className="font-headline text-2xl font-medium tracking-tight">
              Blank Bases
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {blankBases.map((item, i) => (
              <div key={i} className="group">
                <div className="relative aspect-[4/5] bg-surface-container-low mb-6 overflow-hidden rounded-sm">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover mix-blend-multiply opacity-90 transition-transform duration-500 group-hover:scale-105"
                  />
                  <button className="absolute bottom-4 right-4 w-10 h-10 bg-on-surface text-on-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                    <span className="material-symbols-outlined">add</span>
                  </button>
                </div>
                <div className="space-y-1">
                  <span className="font-label text-[0.6rem] uppercase tracking-widest text-on-surface-variant/60">
                    {item.label}
                  </span>
                  <h3 className="font-headline font-medium text-lg">{item.title}</h3>
                  <p className="font-body text-sm text-on-surface-variant mb-3">
                    {item.desc}
                  </p>
                  <p className="font-body text-sm font-semibold">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}