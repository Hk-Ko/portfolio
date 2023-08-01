import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./Nav.css";
import { MdMenu, MdMenuOpen } from "react-icons/md";
import { motion } from "framer-motion";

const NavBar = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [show, setShow] = useState(false);

  const haddleShow = () => {
    setShow(!show);
  };

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
    <div className="">
      <nav className="hidden lg:block">
        <div className="fixed top-0 z-10 flex bg-primary items-center justify-center py-5 w-full">
          <div>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{duration:2}}
              className="flex items-center gap-10 text-para"
            >
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
            </motion.ul>
          </div>
        </div>
      </nav>

      <nav className="block lg:hidden">
        <div
          className={`${
            show ? "bg-opacity-100" : "bg-opacity-5"
          } flex items-center justify-between bg-primary w-full p-2 fixed top-0 z-10`}
        >
          <div className="w-[90%]">
            <ul
              className={`${
                show ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-96"
              } flex items-center justify-center gap-10 text-header text-center duration-500`}
            >
              <li>
                <Link
                  onClick={() => setShow(!show)}
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
                  onClick={() => setShow(!show)}
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
                  onClick={() => setShow(!show)}
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
          <div className="w-[10%]">
            <div onClick={haddleShow} className="text-header text-2xl">
              {show ? <MdMenuOpen /> : <MdMenu />}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
