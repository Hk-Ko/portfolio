import React from "react";
import "./Experience.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Experience = () => {
  const [expRef, expInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [yarRef, yarInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  return (
    <div className="bg-info drop-shadow-2xl">
      <div className="w-[80%] mx-auto py-20">
        <div className="flex flex-col gap-10 w-full">
          <motion.h1
            ref={expRef}
            initial={{ opacity: 0, translateY: 20 }}
            animate={expInView ? { opacity: 1, translateY: 0 } : {}}
            transition={{ duration: 1 }}
            className="text-5xl text-header font-semibold"
          >
            Experience
          </motion.h1>
          <motion.div
            ref={yarRef}
            initial={{ opacity: 0 }}
            animate={yarInView ? { opacity: 1 } : {}}
            transition={{ duration: 2 }}
            className="flex flex-col lg:flex-row items-start gap-5 w-full lg:w-[80%] mx-auto mt-10"
          >
            <div className="flex items-start gap-5 w-full lg:w-[15%]">
              <h1 className="text-2xl text-para bg-[#5d5e61] px-3 py-1 rounded-tr-3xl shadow-lg">
                2022
              </h1>
              <div className="hidden lg:block">
                <div className="flex flex-col gap-3 items-center pt-1">
                  <div className="h-[30px] w-[30px] rounded-full bg-warning experience-shadow"></div>
                  <div className="h-[190px] border border-header"></div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5 w-full lg:w-[85%] pl-0 lg:pl-5">
              <div className="">
                <h1 className="text-2xl text-header font-semibold">
                  Frontend Developer
                </h1>
                <p className="text-xl text-para font-semibold">
                  Mogok , Myanmar
                </p>
              </div>
              <div className="">
                <p className="text-gray-400">
                  After the military takeover of our country on February 1,
                  2021, I had to stop all my previous work After a year, while
                  thinking about what I should do next, I found something that
                  interests me and that is{" "}
                  <span className="text-warning text-lg font-semibold">
                    Web Development{" "}
                  </span>
                  , but in our country these parts are not developed yet, so I
                  didn't know where to start studying, then I took an excellent
                  course online.I was very interested in this knowledge and
                  tried hard. Now that my experience has been over a year, I
                  really want to use this knowledge in real world.I will
                  continue to try and study.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
