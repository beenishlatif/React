import React from "react";
import profileImg from "../assets/profile3.jpg";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <section className="bg-black text-white min-h-screen w-full flex flex-col items-center justify-center px-6 py-10">
      
      {/* Profile Picture */}
      <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-gray-300 shadow-lg shadow-gray-800 transition-transform duration-300 hover:scale-105">
        <img
          src={profileImg}
          alt="Profile"
          className="w-full h-full object-fill object-center"
        />
      </div>

      {/* Name with Typewriter Effect */}
      <h1 className="mt-6 text-3xl md:text-5xl font-extrabold text-center tracking-wide">
        Hi, I’m{" "}
        <span className="bg-gradient-to-r from-pink-500 to-orange-500 text-transparent bg-clip-text">
          <Typewriter
            words={['[Your Name]']}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </span>
      </h1>

      {/* Profession */}
      <h2 className="mt-2 text-lg md:text-2xl font-semibold text-gray-300 text-center">
       Web Developer
      </h2>

      {/* Paragraph */}
      <p className="mt-4 text-sm md:text-lg text-gray-400 max-w-2xl text-center leading-relaxed">
        I’m passionate about creating innovative and efficient Android applications 
        that deliver seamless user experiences. My goal is to bring ideas to life 
        through clean and optimized code.
      </p>

      {/* Call to Action Button with Zoom Effect */}
      <Link
        to="/portfolio"
        className="mt-6 px-6 py-3 bg-gradient-to-r from-pink-500 to-orange-500 text-white rounded-lg font-medium shadow-md transition-transform duration-300 hover:scale-110"
      >
        View My Work
      </Link>
    </section>
  );
}
