import React from "react";
import { Fade } from "react-awesome-reveal";
import { AiOutlineDownload } from "react-icons/ai";
import portrait from "../assets/portrait.png";
export default function About() {
  const cv = document.querySelector(".cv");
  return (
    <div id="about" className="lg:pr-28">
      <Fade triggerOnce={true} direction="up" cascade damping={0.2}>
        <h3 className="title px-5 lg:block hidden lg:px-0 w-full h-fit pt-28 ">
          About
        </h3>
        <div className="px-5 mb-5 lg:hidden">
          <h1 className="heading pt-28">Htun Ko Ko</h1>
          <h3 className="title">Frontend Developer</h3>
        </div>
        <div>
          <img
            className="w-[22rem] h-[23rem] pb-5 mx-auto"
            src={portrait}
            alt=""
          />
        </div>

        <div className="px-5 lg:px-0 flex flex-col gap-2">
          <p>
            Hey there! I'm <span className="text-[#E95C2CFF] text-xl font-semibold">Htun Ko Ko</span>, a
            frontend developer.I have a strong foundation in HTML, CSS, and JavaScript
            and I'm constantly honing my skills through online courses and
            personal projects. Over a year, I've worked on various web
            development projects, from personal websites to small business
            solutions. I enjoy creating visually appealing and intuitive
            interfaces that deliver a seamless user experience. I'm well-versed
            in modern frontend frameworks such as React and have experience
            collaborating with designers and backend developers to bring
            projects to life. What sets me apart is my ability to combine my
            creativity and problem-solving skills with my technical
            expertise. I strive to build websites that not only look great but
            also align with business goals and user needs. Outside of coding, I
            enjoy travelling,cooking and gaming. These interests fuel my
            creativity and keep me inspired in my development work. If you're
            looking for a dedicated frontend developer who brings a unique
            perspective to the table, let's connect and create something amazing
            together!don't hesitate to contact me.
          </p>
        </div>
        <button
          onClick={() => cv.click()}
          className="bg-transparent mx-5 lg:mx-0 lg:mb-0 border border-[#E95C2CFF] font-semibold text-[#E95C2CFF] hover:text-white hover:bg-[#E95C2CFF] transition-all duration-400 ease-linear flex items-center gap-3 my-5 py-3 px-5 text-sm rounded"
        >
          {" "}
          <AiOutlineDownload className="text-lg" />
          <a
            className=" cv"
            href="../../public/htun_ko_ko.pdf"
            download={true}
            target="_blank"
          >
            Resume
          </a>
        </button>
      </Fade>
    </div>
  );
}
