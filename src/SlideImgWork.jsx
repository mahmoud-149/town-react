import React from "react";
import x1 from "./assets/1.jpg";
import x2 from "./assets/2.jpg";
import x3 from "./assets/3.jpg";
import x4 from "./assets/4.jpg";
import x5 from "./assets/5.jpg";
const SlideImgWork = () => {
  return (
    <div className=" h-1/2 ">
      <div className="flex flex-col text-center items-center gap-3 p-10  ">
        <h1 className="text-4xl text-blue-600 font-medium">Our Work</h1>
        <p className="text-lg w-2/4 text-gray-700">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores
          labore corrupti autem reiciendis! Asperiores, mollitia.
        </p>
      </div>
      <div className="flex flex-row justify-center gap-5 pb-10  flex-wrap h-1/2 ">
        <img
          src={x1}
          alt=""
          className="size-50 duration-300 hover:size-55 delay-150 ease-out"
        />
        <img
          src={x2}
          alt=""
          className="size-50 duration-300 hover:size-55 delay-150 ease-out"
        />
        <img
          src={x3}
          alt=""
          className="size-50 duration-300 hover:size-55 delay-150 ease-out"
        />
        <img
          src={x4}
          alt=""
          className="size-50 duration-300 hover:size-55 delay-150 ease-out"
        />
        <img
          src={x5}
          alt=""
          className="size-50 duration-300 hover:size-55 delay-150 ease-out"
        />
      </div>
    </div>
  );
};

export default SlideImgWork;
