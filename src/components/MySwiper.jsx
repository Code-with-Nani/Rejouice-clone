import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import img from "../assets/images/null.jpg";
import img1 from "../assets/images/null (1).jpg";
import img2 from "../assets/images/null (2).jpg";
import img3 from "../assets/images/null (3).jpg";
import img4 from "../assets/images/null (4).jpg";

const MySwiper = () => {
  return (
    <div className="">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay]}
        autoplay={{
          delay: 1000, 
          disableOnInteraction: false, 
        }}
        className="mySwiper  lg:h-fit  "
      >
        <SwiperSlide className="flex justify-center gap-2 lg:gap-6 items-end ">
          <img src={img} alt="" className=" w-[23%] h-[14vh] lg:h-auto object-cover" />
          <img src={img1} alt="" className=" w-[23%] h-[10vh] lg:h-auto object-cover" />
          <img src={img2} alt="" className=" w-[23%] h-[11vh] lg:h-auto object-cover" />
          <img src={img3} alt="" className=" w-[23%] h-[15vh] lg:h-auto object-cover" />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center gap-2 lg:gap-6 items-end ">
          <img src={img4} alt="" className=" w-[23%] h-[18vh] lg:h-auto  object-cover" />
          <img src={img} alt="" className=" w-[23%]  h-[14vh] lg:h-auto object-cover" />
          <img src={img1} alt="" className=" w-[23%] h-[10vh] lg:h-auto object-cover" />
          <img src={img2} alt="" className=" w-[23%] h-[11vh] lg:h-auto object-cover" />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center gap-2 lg:gap-6 items-end ">
          <img src={img3} alt="" className=" w-[23%] h-[15vh] lg:h-auto object-cover" />
          <img src={img} alt="" className=" w-[23%]  h-[14vh] lg:h-auto object-cover" />
          <img src={img1} alt="" className=" w-[23%] h-[10vh] lg:h-auto object-cover" />
          <img src={img2} alt="" className=" w-[23%] h-[11vh] lg:h-auto object-cover" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MySwiper;
