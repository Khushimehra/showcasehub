import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function AddProjectForm() {
  const [formData, setFormData] = useState({
    image: "",
    name: "",
    description: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    await fetch("https://showcasehub-5tq3.onrender.com/api/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    alert("Project added successfully");

    setFormData({
      image: "",
      name: "",
      description: "",
    });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        name="image"
        placeholder="Image URL"
        value={formData.image}
        onChange={handleChange}
      />

      <Input
        name="name"
        placeholder="Project Name"
        value={formData.name}
        onChange={handleChange}
      />

      <Textarea
        name="description"
        placeholder="Project Description"
        value={formData.description}
        onChange={handleChange}
      />

      <Button
        type="submit"
        className="w-full bg-indigo-600 hover:bg-indigo-700"
      >
        Add Project
      </Button>
    </form>
  );
}
