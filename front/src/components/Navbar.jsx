import React from "react";
import { Link } from "react-router-dom";
import Profile from "./ProfileDropDown";
// import { useUser } from "../hooks";

// import ProfileDropDown from "./ProfileDropDown";

const Navbar = () => {
  // const { user } = useUser();
  return (
    <nav className="w-full h-[12vh] flex items-center justify-center border-b-2">
      <div className="w-[96%] h-full flex items-center justify-between ">
        <div className="h-full w-[22%] flex items-center justify-between">
          <div className="h-full w-[75.8%] flex items-center border-r-2">
            <img src="/logo.svg" alt="logo" />
          </div>
          <Link to={"/"}>
            {" "}
            <h1 className="font-bold text-lg">Home</h1>
          </Link>
        </div>

        <div className="h-[40%] w-[25%] relative">
          <img
            className="absolute left-4 top-1/2 -translate-y-1/2 mt-1"
            src="/search.png"
            alt="search"
          />
          <input
            className="outline-none px-[3rem] py-4 w-full h-full border-2 rounded-md flex items-center justify-normal"
            type="text"
            placeholder="Search"
          />
        </div>

        {/* {user ? (
            <>Ouassim</>
          ) : (
            <>Login</>
            
          )} */}
        <Profile />
      </div>
    </nav>
  );
};

export default Navbar;
