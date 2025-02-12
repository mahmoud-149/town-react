import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between  w-full  p-5 text-2xl header">
      <div>
        <u className="no-underline">Online</u>
      </div>
      <div className=" gap-5  hidden lg:flex md:flex  ">
        <span className="text-blue-800">Intoduction</span>
        <span>Our Work</span>
        <span>Contact Us</span>
      </div>
      <div className="flex lg:hidden md:hidden">
        <button className="btn btn-outline">test</button>
      </div>
    </div>
  );
};

export default Header;
