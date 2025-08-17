import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-black shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Logo Left */}
        <Link
          to="/"
          className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-orange-500 text-transparent bg-clip-text"
        >
          MyPortfolio
        </Link>
        
        {/* Nav Links Center */}
        <div className="flex-1 flex justify-center space-x-6">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Portfolio", path: "/portfolio" },
            { name: "Blog", path: "/blog" },
            { name: "Contact", path: "/contact" },
          ].map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                `relative px-2 py-1 text-sm md:text-lg transition duration-300 transform group ${
                  isActive
                    ? "text-pink-500 font-bold scale-110"
                    : "text-gray-300 hover:text-orange-400 hover:font-bold hover:scale-110"
                }`
              }
            >
              {link.name}
              {/* Cool hover effect */}
              <span
                className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-orange-500 transition-all duration-300 group-hover:w-full"
              ></span>
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
