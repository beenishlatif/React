export default function Footer() {
  return (
    <footer className="bg-black text-white py-6 mt-12">
      <div className="container mx-auto px-4 text-center">
        <p>© {new Date().getFullYear()} MyPortfolio. All rights reserved.</p>

        <div className="mt-2 space-x-6">
          {[
            { name: "Twitter", link: "https://twitter.com" },
            { name: "LinkedIn", link: "https://linkedin.com" },
            { name: "GitHub", link: "https://github.com" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                transition-all duration-300 ease-in-out 
                hover:scale-125 hover:font-bold 
                hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r 
                from-pink-500 to-orange-400
              "
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
