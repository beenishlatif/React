import React from "react";
import profilePic from "../assets/profile1.jpg";

export default function About() {


  const webSkills = [
    "HTML5, CSS3, Js",
    "React.js ",
    "Tailwind CSS",
    "Node.js ",
     "Express.js",
    "MongoDB ",
    "GitHub ",
    
  ];

  return (
    <section className="max-w-6xl mx-auto p-8 bg-black shadow-lg rounded-xl">
      <h2 className="text-4xl font-extrabold mb-10 text-center bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
        About Me
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Profile Image */}
        <div className="flex justify-center">
          <img
            src={profilePic}
            alt="Profile"
            className="w-64 h-72 object-cover rounded-xl shadow-2xl cursor-pointer transition-transform duration-500 hover:scale-110"
          />
        </div>

        {/* Right Side - Skills */}
        <div>
          <p className="text-gray-300 mb-6 text-lg">
            I am a passionate{" "}
            <span className="font-semibold text-orange-400">
              Web Developer
            </span>{" "}
            with expertise in creating efficient, user-friendly, and visually
            appealing applications — both mobile and web.
          </p>

         
          {/* Web Dev Skills */}
          <h3 className="text-2xl font-semibold mb-4 text-pink-400">
            Web Development Skills
          </h3>
          <ul className="space-y-3">
            {webSkills.map((skill, index) => (
              <li key={index} className="flex items-center group cursor-pointer">
                <span className="text-lg font-medium text-gray-300 transition-all duration-300 group-hover:scale-110 group-hover:text-orange-400">
                  {skill}
                </span>
                <span className="flex-1 ml-3 h-1.5 bg-gradient-to-r from-orange-500 to-pink-500 transition-all duration-300 group-hover:from-pink-500 group-hover:to-orange-500 group-hover:scale-x-110 origin-left"></span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
