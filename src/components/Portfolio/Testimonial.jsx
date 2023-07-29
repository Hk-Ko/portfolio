import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Testimonial = () => {
  const [testRef, testInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [cli1Ref, cli1InView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [cli2Ref, cli2InView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  return (
    <div className="bg-secondary ">
      <div className="w-[80%] mx-auto pt-20 pb-10">
        <div className="flex flex-col items-start gap-10">
          <motion.h1
            ref={testRef}
            initial={{ opacity: 0, translateY: 20 }}
            animate={testInView ? { opacity: 1, translateY: 0 } : {}}
            transition={{ duration: 1 }}
            className="text-5xl text-header font-semibold"
          >
            Testimonails
          </motion.h1>
          <motion.div
            ref={cli1Ref}
            initial={{ opacity: 0, translateX: 300 }}
            animate={cli1InView ? { opacity: 1, translateX: 0 } : {}}
            transition={{ duration: 1 }}
            className="flex items-start justify-between gap-5 w-full mt-10"
          >
            <div className="w-[60%]">
              <div className="flex gap-3 items-start">
                <div className="w-[15%]">
                  <div className=" border border-warning w-full mt-3"></div>
                </div>
                <div className="w-[85%]">
                  <p className="text-lg text-para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Omnis sunt sit, quo mollitia aliquam itaque vero error ab
                    sint dicta. Nostrum minima eveniet fuga velit nihil, ipsa
                    fugiat hic facilis.
                  </p>
                </div>
              </div>
              <div className="mt-5">
                <h1 className="text-2xl text-header font-semibold">
                  Josef Sharon
                </h1>
                <p className="text-xl text-gray-400">CEO,Omisoft</p>
              </div>
            </div>
            <div className="w-[40%]"></div>
          </motion.div>
          <motion.div
            ref={cli2Ref}
            initial={{ opacity: 0, translateX: -300 }}
            animate={cli2InView ? { opacity: 1, translateX: 0 } : {}}
            transition={{ duration: 1 }}
            className="flex flex-row-reverse items-start justify-between gap-5 w-full mt-20"
          >
            <div className="w-[60%]">
              <div className="flex gap-3 items-start">
                <div className="w-[15%]">
                  <div className=" border border-warning w-full mt-3"></div>
                </div>
                <div className="w-[85%]">
                  <p className="text-lg text-para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Omnis sunt sit, quo mollitia aliquam itaque vero error ab
                    sint dicta. Nostrum minima eveniet fuga velit nihil, ipsa
                    fugiat hic facilis.
                  </p>
                </div>
              </div>
              <div className="mt-5">
                <h1 className="text-2xl text-header font-semibold">
                  Josef Sharon
                </h1>
                <p className="text-xl text-gray-400">CEO,Omisoft</p>
              </div>
            </div>
            <div className="w-[40%]"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
