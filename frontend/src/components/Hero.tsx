export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-8 md:px-20 bg-background">
      <div className="max-w-2xl">
        <span className="uppercase text-xs tracking-widest mb-6 block">
          Premium Custom Garments
        </span>

        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
          The Curated <br />
          <span className="italic font-normal text-primary">Canvas.</span>
        </h1>

        <p className="mt-6 text-lg max-w-md">
          Transforming the act of custom printing into a high-end experience.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="bg-primary text-white px-6 py-3">
            Start Designing
          </button>
          <button className="bg-secondary-container px-6 py-3">
            View Lookbook
          </button>
        </div>
      </div>
    </section>
  );
}