import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Portfolio.css";
import { Link } from "react-router-dom";

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
                <div className="flex flex-col items-center justify-between h-full w-full -translate-x-[600px] group-hover:translate-x-0 duration-500 bg-tran p-14">
                  <div className="text-center">
                    {" "}
                    <p className="text-warning text-2xl font-bold">
                      NFT Marketplace
                    </p>
                    <p className="text-para text-xs">
                      It is a website where you can trade your NFT items.
                    </p>
                  </div>
                  <div className="flex items-center gap-3 mt-10">
                    <Link
                      to="https://nft-marketplace-team.vercel.app/"
                      target="_blank"
                    >
                      <button className="text-header text-xs px-3 py-1 bg-warning rounded-xl hover:bg-header hover:text-purple-500 duration-500">
                        Visit website
                      </button>
                    </Link>
                    <Link
                      to="https://github.com/liansun96/NFT-Marketplace-Team"
                      target="_blank"
                    >
                      <button className="text-header text-xs px-3 py-1 bg-warning rounded-xl hover:bg-header hover:text-purple-500 duration-500">
                        Github
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[300px] w-[550px] dashboard-bg overflow-hidden">
              <div className="group  h-full w-full ">
                <div className="flex flex-col justify-between items-center h-full w-full -translate-x-[600px] group-hover:translate-x-0 duration-500 bg-tran p-14">
                  <div className="text-center">
                    {" "}
                    <p className="text-warning text-2xl font-bold">
                      NFT Dashboard
                    </p>
                    <p className="text-para text-xs">
                      It is Dashboard of NFT Marketplace.
                    </p>
                  </div>
                  <div className="flex items-center gap-3 mt-5">
                    <Link
                      to="https://nft-marketplace-dashboard-five.vercel.app"
                      target="_blank"
                    >
                      <button className="text-header text-xs px-3 py-1 bg-warning rounded-xl hover:bg-header hover:text-purple-500 duration-500">
                        Visit website
                      </button>
                    </Link>
                    <Link
                      to="https://github.com/liansun96/NFT-Marketplace-Dashboard"
                      target="_blank"
                    >
                      <button className="text-header text-xs px-3 py-1 bg-warning rounded-xl hover:bg-header hover:text-purple-500 duration-500">
                        Github
                      </button>
                    </Link>
                  </div>
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
