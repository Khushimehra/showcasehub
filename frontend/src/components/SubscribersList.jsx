import { useEffect, useState } from "react";

export default function SubscribersList() {
  const [subs, setSubs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSubs() {
      try {
        const res = await fetch("http://localhost:5000/api/subscribers");
        const data = await res.json();
        setSubs(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchSubs();
  }, []);

  if (loading) {
    return <p className="text-gray-500">Loading subscribers...</p>;
  }

  if (subs.length === 0) {
    return <p className="text-gray-500">No subscribers yet.</p>;
  }

  return (
    <div className="space-y-3">
      {subs.map((s) => (
        <div key={s._id} className="border rounded-md p-3 bg-gray-50">
          <p>
            <strong>Email:</strong> {s.email}
          </p>
        </div>
      ))}
    </div>
  );
}
