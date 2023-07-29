import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./Nav.css";

const NavBar = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero");
      const aboutSection = document.getElementById("about");
      const portfolioSection = document.getElementById("portfolio");

      const heroRect = heroSection.getBoundingClientRect();
      const aboutRect = aboutSection.getBoundingClientRect();
      const portfolioRect = portfolioSection.getBoundingClientRect();

      if (aboutRect.top <= 0 && aboutRect.bottom > 0) {
        setActiveSection("about");
      } else if (portfolioRect.top <= 0 && portfolioRect.bottom > 0) {
        setActiveSection("portfolio");
      } else {
        setActiveSection("hero");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="fixed top-0 z-10 flex bg-primary items-center justify-center py-5 w-full">
      <div>
        <ul className="flex items-center gap-10 text-para">
          <li>
            <Link
              to="hero"
              smooth={true}
              duration={500}
              offset={-20}
              spy={true}
              activeClass={activeSection === "hero" ? "active" : ""}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              offset={0}
              spy={true}
              activeClass={activeSection === "about" ? "active" : ""}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="portfolio"
              smooth={true}
              duration={500}
              offset={0}
              spy={true}
              activeClass={activeSection === "portfolio" ? "active" : ""}
            >
              Portfolio
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
