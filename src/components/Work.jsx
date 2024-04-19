import React from "react";
import vid from "../assets/images/Website-homepage-Work-01_1.mp4";
import vid1 from "../assets/images/Website-homepage-Work-02_1.mp4";
import vid2 from "../assets/images/Website-homepage-Work-03_1.mp4";
import img from "../assets/images/img1.jpg";
import img1 from "../assets/images/img2.jpg";
import img2 from "../assets/images/img3.jpg";

const Work = () => {
  return (
    <div className="w-screen min-h-screen pl-3 pr-4  lg:pl-9 lg:pr-14 py-16 bg-bgWhite text-textBlack ">
      <div className="upper flex justify-between items-center">
        <h2 className="text-[4.2vw] leading-[4.2vw]  lg:text-[1.9vw] lg:leading-[1.9vw]">
          Transforming visions into brands.
        </h2>
        <h2 className="text-[4.2vw] leading-[4.2vw]  lg:text-[1.9vw] lg:leading-[1.9vw] ">
          <span className="lg:text-[1.6vw]">↳</span> See the work
        </h2>
      </div>
      <div className="box w-full h-full md:h-[50vh] lg:h-[75vh] mt-3 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        {[
          { video: vid, image: img },
          { video: vid1, image: img1 },
          { video: vid2, image: img2 },
        ].map((item,index)=>(
          <div key={index} className="h-full w-full md:w-[32.7%] relative group hover:cursor-pointer transition-all ease-linear duration-[1s]">
          <video
            className="w-full h-full object-cover object-center "
            src={item.video}
            autoPlay
            loop
            muted
          ></video>
          <img
            src={item.image}
            alt=""
            className="w-full h-full object-cover absolute inset-0 group-hover:opacity-0 transition-all ease-linear delay-[0.1s]"
          />
        </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
