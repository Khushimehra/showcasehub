export default function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-slate-100 py-24 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
          Why Choose Us?
        </h2>

        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          We focus on delivering value through thoughtful design, efficient
          development, and long-term scalability.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-lg">High Performance</h3>
            <p className="text-gray-600 mt-2">
              Optimized solutions built for speed and scalability.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-lg">Clean Design</h3>
            <p className="text-gray-600 mt-2">
              User-first interfaces with modern UI principles.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-lg">Reliable Support</h3>
            <p className="text-gray-600 mt-2">
              Continuous improvement and long-term maintenance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
