import React from "react";

const Secondslide = () => {
  return (
    <div className="flex flex-col lg:flex-row md:flex-row   gap-12 items-center p-11 ">
      <div className="w-1/2 flex justify-center">
        <img src="/public/the-town-01.jpg" alt="" className="" />
      </div>
      <div className="flex  flex-col  w-90 items-start justify-between h-80 ">
        <h1 className="text-5xl text-blue-500">Introduction</h1>
        <p className="text-gray-700">
          simple CSS template built on HTML CSS and this is a little parallax
          layout that you can use for your website
        </p>
        <p className="text-gray-700">
          Thank you. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Itaque, nisi tenetur
        </p>
        <button className=" bg-blue-600 text-white p-2.5 rounded-2xl text-lg hover:bg-blue-700 focus:outline-2 focus:outline-blue-800">
          Read More
        </button>
      </div>
    </div>
  );
};

export default Secondslide;
