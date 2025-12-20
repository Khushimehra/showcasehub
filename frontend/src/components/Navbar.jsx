import { User } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="hover:text-indigo-600 transition">
          <h1 className="text-3xl font-bold text-indigo-600">ShowcaseHub</h1>
        </a>

        {/* Navigation + Admin */}
        <div className="flex items-center gap-8 text-lg font-medium text-gray-700">
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

          {/* Admin Icon */}
          <a
            href="/admin"
            className="ml-2 p-2 rounded-full hover:bg-slate-100 transition"
            title="Admin Panel"
          >
            <User className="w-6 h-6 text-indigo-600" />
          </a>
        </div>
      </div>
    </nav>
  );
}
