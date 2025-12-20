import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    city: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    await fetch("https://showcasehub-5tq3.onrender.com/api/contacts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    alert("Thank you for contacting us!");

    setFormData({
      fullName: "",
      email: "",
      mobile: "",
      city: "",
    });
  }

  return (
    <section
      id="contact"
      className="min-h-screen bg-slate-100 pt-6 scroll-mt-24"
    >
      <div className="w-full max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
            Contact Us
          </h2>
          <p className="text-gray-600 mt-3">
            Have a question or want to work with us? Fill out the form below and
            we’ll get back to you.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl shadow p-6 max-w-2xl mx-auto space-y-5"
        >
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full border rounded-md px-4 py-3"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border rounded-md px-4 py-3"
          />

          <input
            type="text"
            name="mobile"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
            required
            className="w-full border rounded-md px-4 py-3"
          />

          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            required
            className="w-full border rounded-md px-4 py-3"
          />

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-md font-medium"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
