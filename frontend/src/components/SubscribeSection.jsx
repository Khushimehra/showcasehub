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
    <section id="subscribe" className="bg-white py-24 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
            Stay Updated
          </h2>

          <p className="text-gray-600 mt-4 max-w-md">
            Subscribe to our newsletter to receive the latest updates, projects,
            and announcements directly in your inbox.
          </p>

          <form
            onSubmit={handleSubmit}
            className="
              mt-6
              bg-slate-100
              rounded-xl
              shadow
              p-5
              flex flex-col sm:flex-row
              gap-4
              max-w-md
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

        <div>
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="Newsletter"
            className="rounded-xl shadow"
          />
        </div>
      </div>
    </section>
  );
}
