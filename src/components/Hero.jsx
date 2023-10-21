import React, { useEffect, useState } from "react";
import { BiLogoTelegram, BiLogoGmail, BiLogoLinkedin } from "react-icons/bi";
import { BsFacebook, BsGithub } from "react-icons/bs";
import BIRDS from "vanta/dist/vanta.birds.min";
import * as Scroll from "react-scroll";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import { Rotate } from "react-awesome-reveal";

export default function Hero() {
  useEffect(() => {
    VANTA.BIRDS({
      el: "#vanta",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color1: 0xffffff,
      color2: 0xffffff,
      birdSize: 1,
      wingSpan: 40.00,
      separation: 100.00,
      quantity: 1.60,
      backgroundAlpha: 0
    })
  },[])

  return (
    <div className="lg:px-28 px-5 lg:pb-28 pb-20 hidden lg:block">
      <div id="vanta">
        <h1 className="heading pt-28 text-[#E95C2CFF]">
        <Rotate direction="left" cascade duration={200}>
          Htun Ko Ko
        </Rotate>
        </h1>
        <h3 className="title">Frontend Developer</h3>
        <p className="my-10">
        A Frontend focused Web Developer building the Frontend of Websites and Web  Applications that leads to the success of the overall product.
        </p>
      </div>
      <div>
        <ul className="w-fit hidden text-[0.8rem] lg:flex my-12 flex-col gap-3">
          <li className="hover:text-[#E95C2CFF] transition-all ease-linear duration-150">
            <span className="nav px-5 relative bottom-2 mr-5 "></span>
            <Link
              to="about"
              className="cursor-pointer hover:font-bold transition-all duration-100"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              activeClass="nav-active"
            >
              ABOUT
            </Link>
          </li>
          <li className="hover:text-[#E95C2CFF] transition-all ease-linear duration-150">
            <span className="nav px-5 relative bottom-2 mr-5 "></span>
            <Link
              to="skill"
              className="cursor-pointer hover:font-bold transition-all duration-100"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              activeClass="nav-active"
            >
              SKILL
            </Link>
          </li>
          <li className="hover:text-[#E95C2CFF] transition-all ease-linear duration-150">
            <span className="nav px-5 relative bottom-2 mr-5 "></span>
            <Link
              to="project"
              className="cursor-pointer hover:font-bold transition-all duration-100"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              activeClass="nav-active"
            >
              PROJECTS
            </Link>
          </li>
          <li className="hover:text-[#E95C2CFF] transition-all ease-linear duration-150">
            <Link
              to="contact"
              className="cursor-pointer hover:font-bold transition-all duration-100"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              activeClass="nav-active"
            >
            <span className="nav nav-active px-5 relative bottom-2 mr-5 "></span>
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex gap-5 text-2xl items-center">
          <li className="hover:text-[#E95C2CFF] transition-all ease-linear duration-150">
            <a href="https://www.facebook.com/profile.php?id=100009339545293">
              <BsFacebook />
            </a>
          </li>
          <li className="hover:text-[#E95C2CFF] transition-all ease-linear duration-150">
            <a href="https://github.com/chanmyae-aung">
              <BsGithub />
            </a>
          </li>
          <li className="hover:text-[#E95C2CFF] transition-all ease-linear duration-150">
            <a href="#">
              <BiLogoTelegram />
            </a>
          </li>

          <li className="hover:text-[#E95C2CFF] transition-all ease-linear duration-150">
            <a href="https://www.linkedin.com/in/chan-myae-36a717199/">
              <BiLogoLinkedin />
            </a>
          </li>
        </ul>
        <p className="mt-8 hidden lg:block text-sm">©htunkko2023</p>
      </div>
    </div>
  );
}
