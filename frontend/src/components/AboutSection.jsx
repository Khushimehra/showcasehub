export default function AboutSection() {
  return (
    <section id="about" className="bg-white py-24 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
          About Us
        </h2>

        <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
          ShowcaseHub is a modern digital platform focused on building
          high-quality web applications. We believe in clarity, scalability, and
          long-term impact through technology.
        </p>

        <a
          href="#projects"
          className="inline-block mt-6 text-indigo-600 font-medium"
        >
          Explore Our Work →
        </a>
      </div>
    </section>
  );
}
