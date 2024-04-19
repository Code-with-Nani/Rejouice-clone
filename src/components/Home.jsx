import React, { useEffect, useState } from "react";
import video from "../assets/images/Home - REJOUICE®.mp4";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { motion } from "framer-motion";
import MyLoader from "./MyLoader";

gsap.registerPlugin(gsap);
const Home = () => {
  const [loader, setLoader] = useState(false);
  const [x, setX] = useState("50vw");
  const [y, setY] = useState("50vh");

  useEffect(() => {
    window.addEventListener("mousemove", (dets) => {
      setX(dets.clientX);
      setY(dets.clientY);
    });
  }, []);

  useGSAP(() => {
    gsap.to(".cursor", {
      x: x,
      y: y,
      duration: 0.3,
    });
  }, [x, y]);

  const handleLoaderAnimationComplete = () => {
    setLoader(true);
  };

  return (
    <>
      <MyLoader onAnimationComplete={handleLoaderAnimationComplete} />
      <div className="w-screen h-screen bg-bgBlack text-textWhite relative overflow-hidden">
        <video
          className="w-full h-full object-cover"
          src={video}
          autoPlay
          loop
          muted
        ></video>
        <div className="cursor lg:h-[7vw] h-[14vw] w-[14vw] lg:w-[7vw] rounded-full bg-bgBlack bg-opacity-55 absolute inset-0 -translate-x-1/2 -translate-y-1/2  flex justify-center items-center">
          <h2 className="lg:text-[1.2vw] lg:leading-[1.2vw] text-[2.8vw] leading-[3vw]  cursor-default">
            Play Reel
          </h2>
        </div>
        {loader && (
          <div className="w-full absolute z-10 bottom-3 select-none flex justify-center items-center pl-12 lg:pl-2 pr-12 md:pr-8">
            {"rejouice".split("").map((item, index) => (
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ ease: [0.25, 1, 0.5, 1], delay: index * 0.03 }}
                key={index}
                className="headline text-[27vw] leading-[23vw]   "
              >
                {item}
              </motion.h1>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
