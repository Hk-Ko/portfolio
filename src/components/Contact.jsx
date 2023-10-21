import React from "react";
import { RiMailLine, RiPhoneLine } from "react-icons/ri";
import { MdOutlineLocationOn } from "react-icons/md";
import { Fade } from "react-awesome-reveal";
import { BsFacebook, BsGithub } from "react-icons/bs";
import { BiLogoLinkedin, BiLogoTelegram } from "react-icons/bi";

export default function Contact() {
  return (
    <div id="contact" className="h-fit lg:pr-28">
      <Fade triggerOnce={true} direction="up" cascade damping={0.3}>
        <h3 className="px-5 lg:px-0 title my-2.5 pt-28 ">
          Contact
        </h3>
        <p className="p-5 lg:px-0">
          Have a sweet project in mind or just want to say hi? <br /> Feel free
          to send me a message!
        </p>
      </Fade>
      <Fade triggerOnce={true} direction="up" delay={500} cascade damping={0.5}>
      <ul className="flex px-5 lg:px-0 flex-col gap-5 my-10">
        <li className="flex items-center gap-5">
          <RiPhoneLine className=" text-2xl w-10 h-10 p-2 contact-icon" />
          <div>
            <p className="text-sm font-bold">Call me</p>
            <p>+959 950 959 891</p>
          </div>
        </li>
        <li className="flex items-center gap-5">
          <RiMailLine className=" text-2xl w-10 h-10 p-2 contact-icon" />
          <div>
            <p className="text-sm font-bold">Email</p>
            <p>htunkko.mgk@gmail.com</p>
          </div>
        </li>
        <li className="flex items-center gap-5">
          <MdOutlineLocationOn className=" text-2xl w-10 h-10 p-2 contact-icon" />
          <div>
            <p className="text-sm font-bold">Address</p>
            <p>Shwe Bon Thar, Mogok , Mandalay</p>
          </div>
        </li>
      </ul>
      </Fade>
      <Fade triggerOnce={true} direction="up" delay={300} cascade damping={0.5}>
      <form action="" className="px-5 lg:px-0 text-start mx-auto my-10">
        <div className="flex flex-col lg:flex-row gap-5 w-full ">
          <div className="lg:w-[50%]">
            <label>Your Name</label>
            <input
              type="text"
              required
              placeholder="Enter your name"
              className="nav focus-within:border-b-[#E95C2CFF] transition-colors duration-500 bg-transparent  outline-none block h-12 w-full"
            />
          </div>
          <div className="lg:w-[50%]">
            <label>Your Email</label>
            <input
              type="text"
              required
              placeholder="Enter your emial address"
              className="nav focus-within:border-b-[#E95C2CFF] transition-colors duration-500 bg-transparent  outline-none block h-12 w-full"
            />
          </div>
        </div>
        <div className="mt-5">
          <label>Your Message</label>
          <textarea
            placeholder="Enter your message"
            className="nav mt-3 focus-within:border-b-[#E95C2CFF] transition-colors duration-500 bg-transparent  block w-full outline-none "
            rows="4"
          />
        </div>
        <button className="bg-transparent border border-[#E95C2CFF] font-semibold text-[#E95C2CFF] hover:text-white hover:bg-[#E95C2CFF] transition-all duration-400 ease-linear flex items-center gap-3 my-5 py-3 px-5 text-sm rounded">
          Send Message
        </button>
      </form>
      </Fade>
      <ul className="flex gap-5 justify-center my-5 text-2xl lg:hidden items-center">
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
          {/* <li className="hover:text-[#E95C2CFF] transition-all ease-linear duration-150">
            <a href="#">
              <BiLogoGmail />
            </a>
          </li> */}
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
      <p className="py-5 lg:hidden text-center border-t text-xs">
        @htunkoko2023
      </p>
    </div>
  );
}
