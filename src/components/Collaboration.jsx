import React from "react";
import vid from "../assets/images/RJ-BALL-BLUE-ORANGE-scaled.webm";

const Collaboration = () => {
  return (
    <div className="w-screen h-screen bg-bgWhite text-textWhite flex justify-center items-center relative">
      <video className="relative" src={vid} autoPlay loop muted></video>
      <svg
        className="abs tl:0 fit transform rotate:-90deg absolute h-[400px]"
        viewBox="0 0 100 100"
      >
        <circle
          cx="50"
          cy="50"
          r="49"
          stroke="#fff"
          stroke-width="0.25"
          fill="none"
          className="o:0.3 $$2$$ $$3$$ $$4$$ (.in-view):tween:all,2.8s,easeOutSlow dasharray:308 dashoffset:616 (.in-view):dashoffset:492.8"
        ></circle>
        <circle
          cx="50"
          cy="50"
          r="49"
          stroke="#fff"
          stroke-width="0.25"
          fill="none"
          className="$$5$$ $$6$$ $$7$$ (.in-view):tween:all,2.8s,easeOutSlow dasharray:308 dashoffset:308 (.in-view):dashoffset:184.79999999999998"
        ></circle>
      </svg>
      <div className="text absolute flex justify-center items-center flex-col select-none">
        <h2 className="text-6xl">3 Seats </h2>
        <h2 className="text-2xl">available For 2024</h2>
      </div>
    </div>
  );
};

export default Collaboration;
