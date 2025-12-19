export default function HeroSection() {
  return (
    <section className="bg-white pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Consultation, Design & Development
          </h1>

          <p className="text-gray-600 mt-5 text-lg">
            We help businesses turn ideas into scalable digital products with
            clean design and robust technology.
          </p>

          <a
            href="#contact"
            className="inline-block mt-6 bg-indigo-600 text-white px-8 py-3 rounded-md font-medium hover:bg-indigo-700"
          >
            Get Free Consultation
          </a>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            alt="Consultation"
            className="rounded-xl shadow"
          />
        </div>
      </div>
    </section>
  );
}
