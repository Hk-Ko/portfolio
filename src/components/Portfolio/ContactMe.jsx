import React from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { BsFacebook, BsGithub, BsTwitter, BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";

const ContactMe = () => {
  return (
    <div className="border-y border-warning bg-info" id="contact">
      <div className="w-[80%] mx-auto py-10">
        <h1 className="text-5xl text-header font-semibold text-center">
          Contact Me
        </h1>
        <div className="flex flex-col gap-10 items-center mt-20">
          <div className="flex flex-wrap gap-5 items-center justify-center w-full lg:w-[70%]">
            <div className="w-full lg:w-[45%]">
              <div className="flex items-center  gap-5 bg-primary px-6 py-4 rounded-lg">
                <AiOutlineMail className="text-header text-xl lg:text-3xl" />
                <p className="text-md lg:text-xl tracking-wider text-warning">
                  htunkko.mgk@gmail.com
                </p>
              </div>
            </div>
            <div className="w-full lg:w-[45%]">
              <div className="flex items-center gap-5 bg-primary px-6 py-4 rounded-lg">
                <AiOutlinePhone className="text-header text-xl lg:text-3xl" />
                <p className="text-md lg:text-xl tracking-wider text-warning">
                  (+95) 9950959891
                </p>
              </div>
            </div>
            <div className="w-full lg:w-[45%]">
              <Link
                to="https://www.google.com/maps/place/Mogok/@22.9268529,96.4877913,14z/data=!3m1!4b1!4m6!3m5!1s0x373366d766cc8a5f:0x7130ba9b4417f63c!8m2!3d22.9246742!4d96.5063095!16zL20vMDZuNzdo?entry=ttu"
                target="_blank"
              >
                <div className="flex items-center gap-5 bg-primary px-6 py-4 rounded-lg">
                  <FaLocationDot className="text-header text-xl lg:text-3xl" />
                  <p className="text-md lg:text-xl tracking-wider text-warning">
                    Mogok, Myanmar
                  </p>
                </div>
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-10 mt-10">
            <Link to="https://www.facebook.com/hk.ko.144" target="_blank">
              <BsFacebook className="text-3xl hover:text-warning cursor-pointer text-header" />
            </Link>
            <Link>
              <BsTwitter className="text-3xl hover:text-warning cursor-pointer text-header" />
            </Link>
            <Link to="https://github.com/Hk-Ko/portfolio" target="_blank">
              <BsGithub className="text-3xl hover:text-warning cursor-pointer text-header" />
            </Link>
            <Link>
              <BsLinkedin className="text-3xl hover:text-warning cursor-pointer text-header" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
