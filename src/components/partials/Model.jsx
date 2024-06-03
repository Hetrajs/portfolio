import React, { useState, useEffect } from "react";
import { IoCloseSharp } from "react-icons/io5";

const Model = ({ isOpen, handleClick, data }) => {
  const [isTransitionComplete, setIsTransitionComplete] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Opening the modal
      const timer = setTimeout(() => {
        setIsTransitionComplete(true);
      }, 500);
      return () => clearTimeout(timer);
    } else {
      // Closing the modal
      setIsTransitionComplete(false);
    }
  }, [isOpen]);

  return (
    <div className={`toggle_menu bottom-0 fixed z-[999] left-0 w-full h-screen transition-transform duration-500 ease-in-out transform ${isOpen ? '-translate-y-0' : 'translate-y-[100vh]'}`}>
      {isOpen && isTransitionComplete && (
        <div className="bg-black bg-opacity-50 absolute inset-0 transition-opacity duration-300 delay-300"></div>
      )}
      <div className="model overflow-hidden w-[58%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[77%] bg-white rounded-3xl">
        <div className="close_tag hidden lg:flex pr-10 pt-12 cursor-pointer items-center justify-end w-full h-[60px]">
          <div className="w-12 lg:w-[50px] lg:h-[50px] h-12 flex justify-center items-center rounded-full bg-[#333336]">
            <IoCloseSharp onClick={handleClick} className="text-[#a5a5a7] text-3xl hover:rotate-[90deg] duration-500" />
          </div>
        </div>
        <div className="left_right flex items-center gap-8 px-24 py-1">
          <div className="left w-1/2 h-full flex flex-col">
            <span className="start text-[14px] border-[1.5px] text-[#1d1d1f] rounded-full px-4 py-2 border-[#1d1d1f] uppercase w-fit">
            starts at ₹{data && data.price}
            </span>
            <h1 className="text-[30px] font-black mt-7 whitespace-nowrap uppercase">{data && data.name}</h1>
            <hr className="my-3 h-[1px] bg-gradient-to-r from-sky-500 to-indigo-500" />
            <p className="para text-[18px] w-5/7 tracking-wider text-[#1d1d1fb3]">
              {data && data.description}
            </p>
            <span className="inline-block w-fit text-sm hover:opacity-75 bg-black text-white font-bold rounded-full px-4 py-3 uppercase mt-5">
              get started
            </span>
            <span className="inline-block text-sm bg-white text-black border-[1px] border-black w-fit font-bold rounded-full px-4 py-2 uppercase mt-3">
              e - mail
            </span>
          </div>
          <div className="right w-1/2">
            <img  className="w-full h-[280px] rounded-lg object-cover" src={data && data.image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Model;
