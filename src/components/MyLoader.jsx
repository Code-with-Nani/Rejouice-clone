import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

gsap.registerPlugin(gsap);
const MyLoader = () => {
  const loader = useRef();
  const tl = gsap.timeline();
  useGSAP(() => {
    tl.from(".loader h3", {
      x: 50,
      opacity: 0,
      duration: 2,
      stagger: 0.1,
    });
    tl.to(".loader h3", {
      opacity: 0,
      x: -10,
      duration: 1,
      stagger: 0.1,
    });
    tl.to(".loader", {
      opacity: 0,
    });
    tl.to(".loader", {
     display:"none"
    });
  }, [loader]);
  return (
    <div
      ref={loader}
      className="loader w-screen h-screen fixed top-0 bg-bgBlack text-textWhite z-20 flex justify-center items-center gap-3 text-2xl "
    >
      <h3>Tomorrow's </h3>
      <h3>Brand </h3>
      <h3>
        Today <sup>TM</sup>{" "}
      </h3>
    </div>
  );
};

export default MyLoader;
