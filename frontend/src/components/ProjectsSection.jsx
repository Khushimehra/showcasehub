import { useEffect, useState } from "react";

export default function ProjectsSection() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchProjects() {
      const res = await fetch(
        "https://showcasehub-5tq3.onrender.com/api/projects"
      );
      const data = await res.json();
      setProjects(data);
    }
    fetchProjects();
  }, []);

  return (
    <section
      id="projects"
      className="min-h-screen bg-slate-100 pt-6 scroll-mt-24"
    >
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
            Our Projects
          </h2>
          <p className="text-gray-600 mt-3">
            A curated selection of projects that showcase our design,
            development, and problem-solving capabilities.
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
          {projects.map((project) => (
            <div
              key={project._id}
              className="
                min-w-[300px]
                md:min-w-[340px]
                bg-white
                rounded-xl
                shadow
                p-5
              "
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-44 object-cover rounded-lg mb-4"
              />

              <h3 className="text-lg font-semibold text-gray-800">
                {project.name}
              </h3>

              <p className="text-sm text-gray-600 mt-2">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
