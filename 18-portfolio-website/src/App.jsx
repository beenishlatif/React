import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ContactButton from "./components/Contact.jsx";
import BackToTop from "./components/BackToTop.jsx";
import Modal from "./components/Modal.jsx";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Blog from "./pages/Blog.jsx";
import Contact from "./pages/Contact.jsx";

import { useState } from "react";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="absolute top-4 right-4 z-50">
          <ContactButton />
        </div>

        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home openModal={() => setIsModalOpen(true)} />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio openModal={() => setIsModalOpen(true)} />} />
            <Route path="/blog" element={<Blog/>} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
        <BackToTop />

        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <h2 className="text-xl font-bold mb-4">Modal Title</h2>
          <p>This is some modal content. You can replace it with dynamic project or blog details.</p>
          <button
            onClick={() => setIsModalOpen(false)}
            className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
          >
            Close
          </button>
        </Modal>
      </div>
    </Router>
  );
}

export default App;
