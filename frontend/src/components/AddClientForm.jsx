import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function AddClientForm() {
  const [formData, setFormData] = useState({
    image: "",
    name: "",
    designation: "",
    description: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    await fetch("http://localhost:5000/api/clients", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    alert("Client added successfully");

    setFormData({
      image: "",
      name: "",
      designation: "",
      description: "",
    });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        name="image"
        placeholder="Client Image URL"
        value={formData.image}
        onChange={handleChange}
      />

      <Input
        name="name"
        placeholder="Client Name"
        value={formData.name}
        onChange={handleChange}
      />

      <Input
        name="designation"
        placeholder="Designation (e.g. CEO)"
        value={formData.designation}
        onChange={handleChange}
      />

      <Textarea
        name="description"
        placeholder="Client Feedback / Description"
        value={formData.description}
        onChange={handleChange}
      />

      <Button
        type="submit"
        className="w-full bg-indigo-600 hover:bg-indigo-700"
      >
        Add Client
      </Button>
    </form>
  );
}
