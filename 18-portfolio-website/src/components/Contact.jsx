import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ContactButton() {
  const navigate = useNavigate();
  const [btnHover, setBtnHover] = useState(false);

  return (
    <button
      onClick={() => navigate("/contact")}
      onMouseEnter={() => setBtnHover(true)}
      onMouseLeave={() => setBtnHover(false)}
      className={`px-6 py-3 rounded-full
        bg-gradient-to-r from-pink-500 to-orange-500
        text-white font-semibold
        shadow-lg
        transform transition-transform duration-300
        ${btnHover ? "scale-105 shadow-2xl" : "scale-100"}
      `}
      aria-label="Contact With Me"
    >
      Contact  Me
    </button>
  );
}
