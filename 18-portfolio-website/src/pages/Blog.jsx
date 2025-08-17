import React, { useState } from "react";

const blogs = [
  {
    id: 1,
    title: "Getting Started with React",
    description:
      "Learn the basics of React, how components work, and how to build interactive UIs efficiently.",
    content: `
      React is a JavaScript library for building user interfaces.
      - Created by Facebook
      - Uses components
      - Works with JSX
      - Helps build fast and scalable apps
    `,
    date: "Aug 10, 2025",
    author: "Your Name",
  },
  {
    id: 2,
    title: "Mastering CSS with Tailwind",
    description:
      "Style your applications faster and with more consistency using the power of Tailwind CSS.",
    content: `
      Tailwind is a utility-first CSS framework.
      - Rapid UI building
      - Mobile responsive
      - Highly customizable
    `,
    date: "Aug 12, 2025",
    author: "Your Name",
  },
  {
    id: 3,
    title: "Node.js for Beginners",
    description:
      "Understand the fundamentals of Node.js and start building powerful backend applications.",
    content: `
      Node.js is a runtime environment built on Chrome's V8 engine.
      - Run JavaScript outside browser
      - Build APIs
      - Handle async tasks efficiently
    `,
    date: "Aug 15, 2025",
    author: "Your Name",
  },
];

export default function BlogSection() {
  const [selectedBlog, setSelectedBlog] = useState(null);

  return (
    <section className="py-16 px-6 bg-black min-h-screen" id="blogs">
      {/* Heading */}
      <h2 className="text-4xl font-extrabold mb-12 text-center bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
        Blog
      </h2>

      {/* Blog Detail */}
      {selectedBlog ? (
        <div
          className="max-w-4xl mx-auto bg-gradient-to-br from-pink-600/20 via-black to-orange-600/20 
          border border-pink-500/30 rounded-2xl p-10 
          shadow-[0_10px_30px_rgba(255,105,180,0.3)] 
          hover:shadow-[0_15px_40px_rgba(255,105,180,0.5)] 
          transition-all duration-500"
        >
          <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
            {selectedBlog.title}
          </h3>

          <p className="text-gray-300 whitespace-pre-line leading-relaxed tracking-wide">
            {selectedBlog.content}
          </p>

          <div className="flex justify-between items-center text-gray-400 text-sm mt-8">
            <span>{selectedBlog.date}</span>
            <span className="text-pink-400">{selectedBlog.author}</span>
          </div>

          <button
            onClick={() => setSelectedBlog(null)}
            className="mt-10 px-8 py-3 rounded-xl 
            bg-gradient-to-r from-pink-500 to-orange-500 
            text-white font-semibold shadow-md 
            hover:shadow-lg hover:scale-105 transition-all"
          >
            ← Back to Blogs
          </button>
        </div>
      ) : (
        /* Blog Cards */
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-gradient-to-br from-pink-600/20 via-black to-orange-600/20 
              border border-pink-500/30 rounded-2xl p-6 
              shadow-[0_8px_25px_rgba(255,105,180,0.25)] 
              hover:shadow-[0_12px_35px_rgba(255,105,180,0.4)] 
              transition-transform transform hover:scale-105 duration-500 cursor-pointer"
            >
              <h3 className="text-2xl font-semibold mb-3 bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                {blog.title}
              </h3>

              <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                {blog.description}
              </p>

              <div className="flex justify-between items-center text-gray-400 text-xs mb-6">
                <span>{blog.date}</span>
                <span className="text-pink-400">{blog.author}</span>
              </div>

              <button
                onClick={() => setSelectedBlog(blog)}
                className="w-full py-2 rounded-lg 
                bg-gradient-to-r from-pink-500 to-orange-500 
                text-white font-semibold shadow-md 
                hover:shadow-lg hover:scale-105 transition-all"
              >
                Read More →
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
