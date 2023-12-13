import React from "react";
import img from "/heroImg.png";
import "./Hero.css";
const Hero = () => {
  return (
    <main className="flex justify-between pl-20 items-center gap-5">
      <div className=" flex flex-col font-k2d text-5xl text-secondary-200">
        <div className="animate-flicker tracking-widest mb-6">
          Welcome to ChessVista
        </div>
        <div className="animate-appear-move tracking-wide">
          Play, Win & Earn
        </div>
        <button className="bg-secondary-100 p-2 rounded-lg drop-shadow-lg w-fit text-2xl mt-10">
          Play Now
        </button>
      </div>
      <div className="flex flex-col font-k2d text-secondary-200  items-center">
        <div className="w-3/5">
          <img className="w-full" src={img} alt="" />
        </div>
        <div className="flex flex-col justify-center ">
          <div className=" text-4xl font-bold pl-10 tracking-wider drop-shadow-lg pr-10">
            ChessVista
          </div>
          <div className="text-3xl pl-3">Every Move Matters</div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
