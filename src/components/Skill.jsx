import React from "react";
import { Fade } from "react-awesome-reveal";
import { skills } from "../constants/data";

export default function Skill() {
  return (
    <div id="skill" className="lg:pr-28">
      <Fade triggerOnce={true} direction="up" delay={300} cascade damping={0.5}>
        <h3 className="px-5 lg:px-0 title my-2.5 pt-28 ">Skills</h3>
        <p className="p-5 lg:px-0">
          The main area of expertise is frontend development (client side of the
          web).
        </p>
      </Fade>
      <section className="flex px-5 lg:px-0 lg:justify-start justify-evenly pt-5  gap-12 text-center flex-wrap">
        <Fade
          triggerOnce={true}
          direction="up"
          delay={700}
          cascade
          damping={0.2}
        >
        {skills.map((i) => {
          return (
                <div key={i.id} className="flex gap-2 items-center justify-center w-24">
                  <img className="w-10" src={i.image} alt="" />
                  <p>{i.title}</p>
                </div>
          );
        })}
        </Fade>
      </section>
    </div>
  );
}
