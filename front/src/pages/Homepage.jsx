import React from "react";
import Navbar from "../components/Navbar";
// import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
// import CanvasModel from "../canvas";
// import { useCanvas } from "../hooks";

const Homepage = () => {
  // const { canvasOptions } = useCanvas();

  return (
    <div className="w-full h-full">
      <Navbar />

      <div className=" w-full h-[90v] flex">
        <h1> Side Bar </h1>
        <h2>Homepage</h2>
      </div>
    </div>
  );
};

export default Homepage;
