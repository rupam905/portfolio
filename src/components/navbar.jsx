import React from "react";
import About from "./About";
const navbar = () => {
  return (
    <div>
      <div className="h-16 flex justify-evenly items-center border-b-[0.1px] border-slate-600">
        <div className=" text-2xl font-bold mx-5"><a href="#">Porfolio</a></div>

        <div>
          <div className="flex items-center space-x-10 font-bold text-lg ">
            <div className=""><a href="#about">About</a></div>
            <div className=""><a href="#">Contact</a></div>
            <div className=""><a href="#">Projects</a></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default navbar;
