import { useEffect, useState } from "react";

export default function ClientsSection() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    async function fetchClients() {
      const res = await fetch("http://localhost:5000/api/clients");
      const data = await res.json();
      setClients(data);
    }
    fetchClients();
  }, []);

  return (
    <section id="clients" className="min-h-screen bg-white pt-6 scroll-mt-24">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
            Happy Clients
          </h2>
          <p className="text-gray-600 mt-3">
            We’ve worked with amazing clients who trusted us to deliver
            reliable, scalable, and high-quality solutions.
          </p>
        </div>

        <div
          className="
            flex gap-6
            overflow-x-auto
            pb-6
            hide-scrollbar
            scroll-smooth
          "
        >
          {clients.map((client) => (
            <div
              key={client._id}
              className="
                min-w-[300px]
                md:min-w-[340px]
                bg-slate-50
                rounded-xl
                shadow
                p-6
                text-left
              "
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={client.image}
                  alt={client.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-800">{client.name}</p>
                  <p className="text-sm text-gray-500">{client.designation}</p>
                </div>
              </div>

              <p className="text-sm text-gray-700 leading-relaxed">
                “{client.description}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
