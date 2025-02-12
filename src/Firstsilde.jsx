import Header from "./firstsilde/Header";
import React from "react";
import Home from "./firstsilde/Home";
//
const Firstsilde = () => {
  return (
    <div className="bg-[url('../public/the-town-bg-01.jpg')] bg-cover bg-center  h-screen text-white ">
      <Header />

      <Home />
    </div>
  );
};

export default Firstsilde;
