import React from "react";
import Navbar from "../components/Navbar";
// import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
// import CanvasModel from "../canvas";
// import { useCanvas } from "../hooks";

const Homepage = () => {
  // const { canvasOptions } = useCanvas();

  return (
    <div className="w-full h-full flex flex-col items-center font-radio-canada">
      <Navbar />

      <div className=" w-full h-[90v] flex ">
        <Sidebar/>

      </div>
    </div>
  );
};

export default Homepage;
