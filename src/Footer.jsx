import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[url("/public/the-town-bg-02.jpg")] bg-right     flex flex-col justify-between p-4 pb-0 '>
      <div className=" flex flex-col justify-start mt-10 gap-10  pl-20 pr-20 text-white h-5/6">
        <div>
          <h1 className="text-4xl font-bold text-white m-3 ">Contact Us</h1>
          <div className=" block bg-white h-0.5 m-4 mt-7"></div>
        </div>
        <p className=" pb-5 mb-5 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At in sequi
          facere, doloribus fugit inventore error quo doloremque cum esse?Lorem
          ipsum dolor sit amet consectetur adipisicing elit. At in sequi facere,
          doloribus fugit inventore error quo doloremque cum esse?
        </p>
        <div className="flex flex-row justify-between">
          <div className=" flex flex-col gap-8">
            <p>Phone: +201 119 554 463</p>
            <p>Location: Location On Map</p>
          </div>
          <div className=" flex flex-col gap-8">
            <p>Email: heshamkhalil1988@gmail.com</p>
            <div className="flex  gap-2">
              <input type="text" className=" border-2" />
              <button className=" text-blue-600 bg-gray-200 p-2.5 rounded-sm text-sm hover:bg-gray-400 focus:outline-2 focus:outline-blue-800 ">
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=' w-1/1 flex justify-center mt-8 pt-6'>Copyright © 2019 Company Name - Design: </div>
    </div>
  );
}

export default Footer