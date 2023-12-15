import React from "react";
import { Link } from "react-router-dom";
// import { useUser } from "../hooks";

// import ProfileDropDown from "./ProfileDropDown";

const Navbar = () => {
  // const { user } = useUser();
  return (
    <nav className="w-full h-[10v] flex items-center justify-center ">
      <div className="h-fit ">
        <img src="/logo.svg" alt="logo" />
        {/* Connected */}
      </div>
      <Link to={"/"}>Home</Link>
      {/* {user ? (
        <>Ouassim</>
      ) : (
        <>Login</>
        
      )} */}
      <p>Ouassim</p>
    </nav>
  );
};

export default Navbar;
