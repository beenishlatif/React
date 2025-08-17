import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="max-w-6xl mx-auto p-8 bg-black rounded-xl shadow-lg">
      <h2 className="text-4xl font-extrabold mb-10 text-center bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
        Contact Me
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side - Intro Text */}
        <div className="text-white space-y-5 text-sm md:text-base">
          <h3 className="text-4xl font-extrabold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
            Let's Talk
          </h3>
          <p className="text-gray-300 leading-relaxed">
            Whether you're looking to create an innovative mobile app,  
            need help with Android development, or just want to share ideas —  
            I’m here to listen and collaborate.
          </p>
          <p className="text-gray-400">
            My passion lies in transforming ideas into powerful, user-friendly applications.  
            Drop me a message, and let’s bring your vision to life!
          </p>

          {/* Contact Info */}
          <div className="mt-6 space-y-3 font-semibold">
            <p>
              📞 Phone:{" "}
              <a
                href="https://wa.me/923176902942"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-pink-500 transition"
              >
              +923010677891
              </a>
            </p>
            <p>
              📧 Email:{" "}
              <a
                href="mailto:zeeshanbhatti9022@gmail.com"
                className="text-white hover:text-pink-500 transition"
              >
               something@gmail.com
              </a>
            </p>
            <p>
              📍 Location:{" "}
              <a
                href="https://www.google.com/maps/place/Lahore,+Punjab,+Pakistan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-pink-500 transition"
              >
               Punjab
              </a>
            </p>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div>
          {submitted ? (
            <p className="text-green-400 text-center text-lg">
              ✅ Thank you! Your message has been sent.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:border-pink-500 focus:ring-2 focus:ring-pink-500 outline-none transition"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:border-orange-500 focus:ring-2 focus:ring-orange-500 outline-none transition"
                value={formData.email}
                onChange={handleChange}
              />
              <textarea
                name="message"
                placeholder="Your Message"
                required
                rows="5"
                className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:border-pink-500 focus:ring-2 focus:ring-pink-500 outline-none resize-none transition"
                value={formData.message}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="w-full py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-orange-500 to-pink-500 hover:opacity-90 transition"
              >
                Send Message
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
