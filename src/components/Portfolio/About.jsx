import React from "react";
import { skills } from "./Skills";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Fade } from "react-awesome-reveal";

const About = () => {
  const [aboutRef, aboutInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [skillsRef, skillsInView] = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  return (
    <div className="bg-secondary" id="about">
      <div className="w-[80%] mx-auto">
        <motion.div
          ref={aboutRef}
          initial={{ opacity: 0, translateY: 20 }}
          animate={aboutInView ? { opacity: 1, translateY: 0 } : {}}
          transition={{ duration: 2 }}
          className="flex flex-col gap-10 pt-20 pb-10"
        >
          <h1 className="text-5xl text-header font-semibold">About</h1>
          <div className="flex items-start gap-2">
            <div className="border border-warning w-[5%] mt-3"></div>
            <div className="w-[95%]">
              <p className="text-lg text-para">
                Hey there! I'm <span className="text-warning">Marcus Jude</span>
                , a junior frontend developer with a background in MMS-it one
                stop solution. While my formal education lies in MMS-it, my love
                for coding and web development led me to pursue a career in
                frontend development. I have a strong foundation in HTML, CSS,
                and JavaScript and I'm constantly honing my skills through
                online courses and personal projects. Over the years, I've
                worked on various web development projects, from personal
                websites to small business solutions. I enjoy creating visually
                appealing and intuitive interfaces that deliver a seamless user
                experience. I'm well-versed in modern frontend frameworks such
                as React and have experience collaborating with designers and
                backend developers to bring projects to life. What sets me apart
                is my ability to combine my creativity and problem-solving
                skills from MMS-it with my technical expertise. I strive to
                build websites that not only look great but also align with
                business goals and user needs. Outside of coding, I enjoy
                travelling around the world. These interests fuel my creativity
                and keep me inspired in my development work. If you're looking
                for a dedicated frontend developer who brings a unique
                perspective to the table, let's connect and create something
                amazing together!
              </p>
            </div>
          </div>

          {/* my skill */}

          <div className="flex flex-col gap-10 mt-20">
            <h1 className="text-center text-header text-5xl font-semibold">
              My Skills
            </h1>
            <div className="flex flex-wrap gap-10 items-center justify-center">
              {skills.map((skill) => (
                <div key={skill.id} className="">
                  <div className="hidden lg:block">
                    <motion.div
                      key={skill.id}
                      className="group flex flex-col gap-5 items-center w-full lg:w-[220px] rounded-lg shadow-lg bg-primary p-10"
                      ref={skillsRef}
                      initial={{ opacity: 0, y: 30 }}
                      animate={skillsInView ? { opacity: 1, y: 0 } : {}} 
                      transition={{ duration: 0.5, delay: skill.id * 0.1 }}
                    >
                      <div className="">
                        <img
                          src={skill.image}
                          className="h-[70px] group-hover:scale-125 duration-500"
                          alt=""
                        />
                      </div>
                      <h1 className="text-xl text-header">{skill.title}</h1>
                    </motion.div>
                  </div>

                  <div className="block lg:hidden">
                    <Fade
                      key={skill.id}
                      triggerOnce={true}
                      direction="up"
                      delay={500}
                      cascade
                      damping={0.2}
                      className="group flex flex-col gap-5 items-center w-[220px] rounded-lg shadow-lg bg-primary p-10"
                    >
                      <div className="flex flex-col items-center gap-5">
                        <img
                          src={skill.image}
                          className="h-[70px] group-hover:scale-125 duration-500"
                          alt=""
                        />
                        <h1 className="text-xl text-header">{skill.title}</h1>
                      </div>
                    </Fade>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
