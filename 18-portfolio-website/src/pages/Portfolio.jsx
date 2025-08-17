import React from "react";

export default function PortfolioSection() {
  const projects = [
    {
      id: 1,
      title: "Movie Search Website",
      desc: "A React-based movie search and filter website using TMDB API.",
      link: "#",
    },
    {
      id: 2,
      title: "E-Commerce Store",
      desc: "Full-stack clothing store with React (frontend) & Node.js (backend).",
      link: "#",
    },
    {
      id: 3,
      title: "Chatbot with React",
      desc: "Smart chatbot built using React + JavaScript.",
      link: "#",
    },
  ];

  return (
    <section className="py-16 px-6 bg-black" id="portfolio">
      {/* Heading */}
      <h2 className="text-4xl font-extrabold mb-12 text-center bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
        My Portfolio
      </h2>

      {/* Project Cards */}
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gradient-to-br from-pink-600/20 via-black to-orange-600/20 
                       border border-pink-500/30 rounded-2xl p-6 
                       shadow-lg hover:shadow-orange-500/40 
                       transition-transform hover:scale-105 duration-300"
          >
            {/* Project Title */}
            <h3 className="text-2xl font-semibold mb-3 bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
              {project.title}
            </h3>

            {/* Project Description */}
            <p className="text-gray-300 text-sm mb-6">{project.desc}</p>

            {/* Button */}
            <a
              href={project.link}
              className="inline-block px-4 py-2 rounded-lg 
                         bg-gradient-to-r from-pink-500 to-orange-500 
                         text-white font-medium shadow-md 
                         hover:shadow-lg hover:scale-105 transition-all"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
