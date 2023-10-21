import React, { useEffect, useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import { TypeAnimation } from "react-type-animation";

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);
  if (isLoading) {
    return (
      <div className="flex w-screen h-screen justify-center items-center bg-[#4F2C1DFF]">
        <TypeAnimation
          sequence={["Htun Ko Ko", 500, "FRONTEND DEVELOPER", 200]}
          wrapper="span"
          speed={50}
          style={{
            fontSize: "1em",
            display: "inline-block",
            fontWeight: 700,
            color: "#E95C2CFF",
          }}
          repeat={Infinity}
        />
      </div>
    );
  }
  return (
    <main className="flex flex-col relative bg-[#4F2C1DFF]">
      <div className="absolute z-40 w-full lg:hidden h-screen flex items-center">
        <Navbar />
      </div>
      <div className="lg:w-[50%] overflow-hidden lg:fixed top-0">
        <Hero />
      </div>
      <div className="lg:w-[50%] lg:ml-auto">
        <About />
        <Skill />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
