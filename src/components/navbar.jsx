import React from "react";
import About from "./About";
const navbar = () => {
  return (
    <div>
      <div className=" h-12 flex justify-evenly relative items-center border-b-[0.1px] border-slate-600">
        <div className=" text-1xl font-bold "><a href="#">Porfolio</a></div>

        <div>
          <div className="flex items-center justify-evenly space-x-10 font-bold">
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
