import React, { useState } from "react";
import { Link } from "react-scroll";
import { Squeeze as Hamburger } from "hamburger-react";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="w-full ">
      <div className="fixed w-full flex justify-end bg-[#000] top-0 right-0 p-5 z-40 ">
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
    <ul className={`${isOpen ? "translate-x-0": "translate-x-full"} transition-all ease-linear duration-500 w-full h-screen text-xl fixed bottom-0 z-10 bg-[#000] flex items-center justify-center flex-col gap-10`}>
        <li  className="text-[#E50914] transition-all ease-linear duration-150">
          <Link
          onClick={() => setOpen(!isOpen)}
            to="about"
            className="cursor-pointer transition-all duration-100"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            activeClass="nav-active"
          >
            ABOUT
          </Link>
        </li>
        <li  className="text-[#E50914] transition-all ease-linear duration-150">
          <Link
          onClick={() => setOpen(!isOpen)}
            to="skill"
            className="cursor-pointer transition-all duration-100"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            activeClass="nav-active"
          >
            SKILL
          </Link>
        </li>
        <li  className="text-[#E50914] transition-all ease-linear duration-150">
          <Link
          onClick={() => setOpen(!isOpen)}
            to="project"
            className="cursor-pointer transition-all duration-100"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            activeClass="nav-active"
          >
            PROJECTS
          </Link>
        </li>
        <li  className="text-[#E50914] transition-all ease-linear duration-150">
          <Link
          onClick={() => setOpen(!isOpen)}
            to="contact"
            className="cursor-pointer transition-all duration-100"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            activeClass="nav-active"
          >
            CONTACT
          </Link>
        </li>
      </ul>
    </div>
  );
}
