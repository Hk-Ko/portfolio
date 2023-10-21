import React, { useEffect, useState } from "react";
import { projects } from "../constants/data";
import { BsGithub } from "react-icons/bs";
import { HiLink } from "react-icons/hi";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-scroll";
import { BiLink } from "react-icons/bi";

export default function Projects() {
  return (
    <div id="project" className=" lg:pr-28">
      <Fade triggerOnce={true} direction="up" delay={300} cascade damping={0.5}>
        <h3 className="px-5 lg:px-0 title my-2.5 pt-28 ">Projects</h3>
        <p className=" p-5 lg:px-0">
          Here are some of my team projects and personal projects. If you want
          to see more examples of my work than the ones showcased in this site,
          please{" "}
          <Link
            to="contact"
            className="cursor-pointer font-bold transition-all text-[#E95C2CFF] duration-100"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            activeClass="nav-active"
          >
            contact me
          </Link>
          .
        </p>
      </Fade>
      <div className="px-5 lg:px-0 flex gap- lg:flex-row lg:gap-0  flex-wrap justify-between transition-all duration-700">
        {projects?.map((i) => {
          return (
            <div
              key={i.id}
              className="group project hover:bg-[#e5091405] p-5 lg:mb-5 rounded transition-all duration-200 h-fit overflow-hidden relative"
            >
              <Fade
                triggerOnce={true}
                direction="up"
                delay={300}
                cascade
                damping={0.5}
              >
                <div className="w-full group flex flex-col md:flex-row gap-5">
                  <div className="w-full md:w-[30%]">
                    <img className="" src={i.image} alt="" />
                  </div>
                  <div className="w-full md:w-[70%]">
                    <h1 className="text-white transition-all duration-200 group-hover:text-[#E95C2CFF] font-semibold">{i.title}</h1>
                    <p className="text-sm">{i.description}</p>
                    <div className="mt-2 flex items-center gap-5">
                      <div className="flex items-center gap-1">
                      <BiLink className="text-lg"/> <a target="_blank" className="text-sm hover:underline" href={i.github}>github</a>
                      </div>
                      <div className="flex items-center gap-1">
                      <BiLink className="text-lg"/> <a target="_blank" className="text-sm hover:underline" href={i.demo}>live demo</a>
                      </div>
                    </div>
                    <div className="flex flex-wrap text-xs gap-2 my-5">
                    {
                      i.badges.map(el => {
                        return (
                          <div className=" bg-[#e5091413] text-white group-hover:text-[#E95C2CFF] px-3 py-1 rounded-full" key={el.id}>
                            <span>{el.text}</span>
                          </div>
                        )
                      })
                    }
                    </div>
                  </div>
                </div>
              </Fade>
              {/* <div className="w-full flex flex-col justify-between text-center group-hover:opacity-100 opacity-0 h-full absolute left-0 top-0 bg-[#00000048] text-white transition duration-500">
                <div className=" group-hover:translate-y-7 duration-500 transition-all -translate-y-2">
                  <h1 className="bg-[#E50914] w-fit mx-auto text-white py-2 px-4 text-sm font-semibold rounded">
                    {i.title}
                  </h1>
                </div>
                <div className=" flex items-center gap-5 justify-center group-hover:-translate-y-7 duration-500 transition-all translate-y-2">
                  <a target="_blank" href={i.github}>
                    <BsGithub className="bg-[#E50914] p-1 w-8 h-8 rounded-full" />
                  </a>
                  <a target="_blank" href={i.demo}>
                    <HiLink className="bg-[#E50914] p-1 w-8 h-8 rounded-full" />
                  </a>
                </div>
              </div> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}
