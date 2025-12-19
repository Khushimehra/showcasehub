import { useState } from "react";

export default function SubscribeSection() {
  const [email, setEmail] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    await fetch("http://localhost:5000/api/subscribers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    alert("Subscribed successfully!");
    setEmail("");
  }

  return (
    <section id="subscribe" className="min-h-screen bg-white pt-6 scroll-mt-24">
      <div className="w-full max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
            Stay Updated
          </h2>
          <p className="text-gray-600 mt-3">
            Subscribe to our newsletter to receive the latest updates, projects,
            and announcements.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="
            max-w-xl mx-auto
            bg-slate-100
            rounded-xl
            shadow
            p-6
            flex flex-col sm:flex-row
            gap-4
          "
        >
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 border rounded-md px-4 py-3"
          />

          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-md font-medium"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
