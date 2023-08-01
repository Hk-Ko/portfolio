import React, { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Portfolio/Home";
import { Fade } from "react-awesome-reveal";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  if (isLoading) {
    return (
      <div className="flex flex-col gap-5 items-center justify-center h-screen w-full bg-primary">
        <Fade
          triggerOnce={true}
          direction="up"
          delay={500}
          cascade
          damping={0.2}
          className=""
        >
          <h1 className="text-5xl text-warning font-bold">Marcus Jude</h1>
          <p className="text-3xl text-header font-semibold">
            Frontend Developer
          </p>
        </Fade>
      </div>
    );
  }

  return (
    <div className="font-roboto">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
