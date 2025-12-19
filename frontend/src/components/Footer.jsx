export default function Footer() {
  return (
    <footer className="bg-slate-100 py-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <h3 className="text-lg font-semibold text-indigo-600">ShowcaseHub</h3>

        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} ShowcaseHub. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
