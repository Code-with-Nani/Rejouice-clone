import React from "react";

const Header = () => {
  return (
    <>
      <div className="nav w-screen flex justify-between items-center pl-3 pr-4 py-5 lg:pl-9 lg:pr-14 lg:py-10 text-textWhite fixed top-0 z-10 ">
        <a href="/">
          <h2 className="text-[4vw] leading-[4vw]  lg:text-[1.5vw] lg:leading-[1.5vw] ">
            The Venture Agency.
          </h2>
        </a>
        <h2 className="text-[4vw] leading-[4vw] lg:text-[1.5vw] lg:leading-[1.5vw] cursor-pointer">
          Menu
        </h2>
      </div>
    </>
  );
};

export default Header;
