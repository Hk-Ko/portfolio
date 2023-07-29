import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Portfolio/Home";

const App = () => {
  return (
    <div className="font-roboto">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
