import React from "react";
import Work from "./Work";

/*
e3987f
5c648c
*/
const SlideWork = () => {
  return (
    <div
      className="flex flex-col justify-around 
     items-center  bg-linear-to-b  p-8 
    from-[#e3987f] to-[#5c648c] 
    md:flex-row lg:flex-row md:gap-4 lg:gap-4
    "
    >
      <Work />
      <Work />
      <Work />
    </div>
  );
};

export default SlideWork;
