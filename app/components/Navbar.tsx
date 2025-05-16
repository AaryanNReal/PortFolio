"use client";

import { useEffect, useRef } from "react";

const Navbar = () => {
  const navRef = useRef<HTMLElement>(null);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        if (window.scrollY > 50) {
          navRef.current.classList.add("bg-gray-900/90", "backdrop-blur-sm", "shadow-xl");
          navRef.current.classList.remove("bg-transparent");
        } else {
          navRef.current.classList.add("bg-transparent");
          navRef.current.classList.remove("bg-gray-900/90", "backdrop-blur-sm", "shadow-xl");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed w-full z-50 bg-transparent transition-all duration-300 border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-white font-bold text-xl bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text">
              Aaryan Sharma
            </span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {["home", "about", "education", "experience", "skills", "projects", "contact", "resume"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium capitalize transition-colors duration-300 relative group"
                >
                  {item}
                  <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 w-0 bg-cyan-400 transition-all duration-300 group-hover:w-3/4"></span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;