import { useEffect, useState } from "react";

export default function ContactsList() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchContacts() {
      try {
        const res = await fetch(
          "https://showcasehub-5tq3.onrender.com/api/contacts"
        );
        const data = await res.json();
        setContacts(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchContacts();
  }, []);

  if (loading) {
    return <p className="text-gray-500">Loading contacts...</p>;
  }

  if (contacts.length === 0) {
    return <p className="text-gray-500">No contact submissions yet.</p>;
  }

  return (
    <div className="space-y-4">
      {contacts.map((c) => (
        <div key={c._id} className="border rounded-md p-4 bg-gray-50">
          <p>
            <strong>Name:</strong> {c.fullName}
          </p>
          <p>
            <strong>Email:</strong> {c.email}
          </p>
          <p>
            <strong>Mobile:</strong> {c.mobile}
          </p>
          <p>
            <strong>City:</strong> {c.city}
          </p>
        </div>
      ))}
    </div>
  );
}
