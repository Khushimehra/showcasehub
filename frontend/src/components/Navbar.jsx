export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <a href="#home" className="hover:text-indigo-600 transition">
          <h1 className="text-3xl font-bold text-indigo-600">ShowcaseHub</h1>
        </a>

        <div className="flex gap-8 text-lg font-medium text-gray-700">
          <a href="#projects" className="hover:text-indigo-600 transition">
            Projects
          </a>
          <a href="#clients" className="hover:text-indigo-600 transition">
            Clients
          </a>
          <a href="#contact" className="hover:text-indigo-600 transition">
            Contact
          </a>
          <a href="#subscribe" className="hover:text-indigo-600 transition">
            Subscribe
          </a>
        </div>
      </div>
    </nav>
  );
}
