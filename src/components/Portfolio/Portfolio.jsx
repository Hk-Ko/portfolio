import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import './Portfolio.css'

const Portfolio = () => {
  const [portRef, portInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="bg-secondary py-20" id="portfolio">
      <div className="w-[90%] mx-auto">
        <motion.div
          ref={portRef}
          initial={{ opacity: 0, translateY: 20 }}
          animate={portInView ? { opacity: 2, translateY: 0 } : {}}
          transition={{ duration: 1 }}
          className="flex flex-col gap-20 w-full"
        >
          <h1 className="text-center text-5xl text-header font-semibold">
            Portfolio
          </h1>
          <div className="flex flex-wrap gap-20 items-center justify-center">
            <div className="h-[300px] w-[550px] portfolio-bg overflow-hidden">
              <div className="group  h-full w-full ">
                <div className="flex justify-center items-center h-full w-full -translate-x-[600px] group-hover:translate-x-0 duration-500 bg-tran">
                  <h1>black</h1>
                </div>
              </div>
            </div>
            <div className="h-[300px] w-[550px] dashboard-bg overflow-hidden">
              <div className="group  h-full w-full ">
                <div className="flex justify-center items-center h-full w-full -translate-x-[600px] group-hover:translate-x-0 duration-500 bg-tran">
                  <h1>black</h1>
                </div>
              </div>
            </div>
            <div className="h-[300px] w-[550px] bg-header overflow-hidden">
              <div className="group  h-full w-full ">
                <div className="flex justify-center items-center h-full w-full -translate-x-[600px] group-hover:translate-x-0 duration-500 bg-tran">
                  <h1>black</h1>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;
