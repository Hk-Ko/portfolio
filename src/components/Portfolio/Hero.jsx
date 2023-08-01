import React from "react";
import profile from "./images/profile.png";
import bg from "./images/blob.svg";
import { Rotate } from "react-awesome-reveal";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      className="bg-primary w-full h-[700px] lg:h-screen drop-shadow-2xl p-3 lg:p-0"
      id="hero"
    >
      <div className="w-full lg:w-[80%] h-full mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-5 w-full h-full">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3 }}
            className="flex flex-col gap-2 items-start w-full lg:w-[50%]"
          >
            <h1 className="text-2xl text-header font-semibold tracking-wide">
              I'M{" "}
              <span className="text-5xl text-warning font-semibold">
                <Rotate direction="left" cascade duration={300}>
                  Marcus Jude
                </Rotate>
              </span>
            </h1>
            <h1 className="text-md text-para font-semibold tracking-wider">
              Frontend Web Developer based in Myanmar. <br />
              This is my official portfolio website to show all details and work
              expirins web development
            </h1>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              activeClass="nav-active"
            >
              <button className="text-lg text-warning hover:text-primary hover:bg-warning duration-500 font-semibold border-2 border-warning px-5 py-2 rounded-xl mt-5">
                Contact Me
              </button>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="w-full lg:w-[50%] group flex items-end justify-center relative h-[400px] lg:h-full"
          >
            <img
              src={bg}
              alt=""
              className="absolute group-hover:translate-y-4 duration-500"
            />
            <img
              src={profile}
              alt=""
              className="absolute group-hover:translate-x-4 duration-500"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
