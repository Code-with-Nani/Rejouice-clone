import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, gsap);
const About = () => {
  const container = useRef();
  useGSAP(() => {
    gsap.from(".text h3 ", {
      y: 120,
      height: 0,
      stagger: 0.25,
      duration: 1,
      scrollTrigger: {
        trigger: ".about",
        scroller: "body",
        start: "top 50%",
        end: "top 37%",
        scrub: 2,
      },
    });
  }, [container]);

  return (
    <div
      ref={container}
      className="about w-screen h-[70vh] sm:h-screen xl:h-[133vh] bg-bgWhite text-textBlack pl-3 pr-4  lg:pl-9 lg:pr-14 py-16 overflow-hidden "
    >
      <div className="upper ">
        <h2 className="text-[4.2vw] leading-[4.7vw]  lg:text-[1.9vw] lg:leading-[2.5vw]">
          Full-service digital agency.
        </h2>
        <div className="left flex justify-between items-center border-b-[1px] border-b-black border-opacity-35  pb-4">
          <h2 className="text-[4.2vw] leading-[4.2vw]  lg:text-[1.9vw] lg:leading-[1.9vw]">
            Two engagement models.
          </h2>
          <h2 className="text-[4.2vw] leading-[4.2vw]  lg:text-[1.9vw] lg:leading-[1.9vw]">
            Paris / San Diego
          </h2>
        </div>
      </div>
      <div className="lower select-none ">
        <div className="text py-6  lg:text-[4vw] lg:leading-[4.5vw] xl:leading-[5vw] text-[4vw] leading-[4.5vw] sm:leading-[5.5vw] overflow-hidden">
          {[
            " We are a digital brand accelerator. Our",
            "mission is to transform founders' visions into",
            "remarkable brands. Choose traditional",
            "compensation or an equity offset through our",
            "Venture Model—your vision, your decision.",
          ].map((item, index) => (
            <h3
              key={item}
              className={`  ${
                index === 0 &&
                "lg:before:content-['heloo'] before:content-['hel'] before:opacity-0"
              }`}
            >
              {item}
            </h3>
          ))}
        </div>
        <div className="btm-text relative text-center pt-10  xl:pt-10">
          <h4 className="my-4">
            Agency & Venture
            <span className="bg-bgBlack text-bgWhite rounded-full px-2 py-1 mx-1">
              Models
            </span>
            <span className="transform -rotate-90">↵</span>
          </h4>
          <h5 className="text-[4vw] leading-[4.5vw]">Explore our services</h5>
          <h5 className="text-[4vw] leading-[4.5vw]">and engagement models</h5>
        </div>
      </div>
    </div>
  );
};

export default About;
