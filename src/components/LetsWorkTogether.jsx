import React from "react";
import ProfileImg from "../../img/ProImg.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const LetsWorkTogether = () => {
  return (
    <div className="w-full min-h-screen lg:mt-40 mt-20">
      <div className="headings text-center text-[50px] lg:text-[100px] font-bold uppercase">
        <span className="inline-block w-full h-full overflow-hidden">
          <motion.h1 initial={{ y: "100%" }} whileInView={{ y: 0 }} transition={{ ease: "linear", duration: .5}} className="leading-none tracking-tight">let's work</motion.h1>
        </span>
        <span className="inline-block w-full h-full overflow-hidden">
          <motion.h1 initial={{ y: "100%" }} whileInView={{ y: 0 }} transition={{ ease: "linear", duration: .5}} className="leading-none tracking-tight">together</motion.h1>
        </span>
        <button className="inter700 hover:bg-white hover:text-black hover:border-[1px] hover:border-[#1d1d1fb3] duration-300  mt-6 lg:mt-3 uppercase text-[18px] bg-black text-white px-6 py-3 lg:py-2 lg:px-5 rounded-full ">
          contact now
        </button>
      </div>
      <div className="picture w-full lg:w-2/3 mx-auto px-6 mt-16 lg:mt-10 overflow-hidden">
        <img
          className="rounded-full md:rounded-[250px] lg:rounded-[270px]"
          src={ProfileImg}
          alt=""
        />
      </div>
      <p className="text-[18px] px-5 md:px-10 w-3/2 md:w-5/2 lg:w-3/5 lg:mx-auto text-center lg:mt-12 mt-10 leading-[22px] font-bold">
        BASED IN INDIA, I AM AN INNOVATIVE DESIGNER AND DIGITAL ARTIST. MY
        PASSION FOR MINIMALIST AESTHETICS, ELEGANT TYPOGRAPHY, AND INTUITIVE
        DESIGN IS EVIDENT IN MY WORK.
      </p>
      <div className="links mt-10 lg:mt-16 flex flex-col lg:flex-row items-center justify-center lg:gap-4 gap-6 text-[18px] leading-[20px] font-semibold text-center uppercase">
        <div className="insta flex items-center justify-center lg:justify-end">
          <Link className=" hover:border-b-[3px] hover:border-[#1d1d1fb3] ">
            instagram
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            focusable="false"
            viewBox="0 0 24 24"
            color="rgb(29, 29, 31)"
            style={{
              userSelect: "none",
              width: "6.5%",
              height: "6.5%",
              display: "inline-block",
              fill: "rgb(29, 29, 31)",
              flexShrink: 0,
              rotate: "45deg",
              fontWeight: "bolder",
            }}
          >
            <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"></path>
          </svg>
        </div>
        <div className="insta flex items-center justify-center">
          <Link className="hover:border-b-[3px] hover:border-[#1d1d1fb3]">
            linkedin
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            focusable="false"
            viewBox="0 0 24 24"
            color="rgb(29, 29, 31)"
            style={{
              userSelect: "none",
              width: "6.5%",
              height: "6.5%",
              display: "inline-block",
              fill: "rgb(29, 29, 31)",
              flexShrink: 0,
              rotate: "45deg",
              fontWeight: "bolder",
            }}
          >
            <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"></path>
          </svg>
        </div>
        <div className="insta flex items-center justify-center lg:justify-start">
          <Link className="hover:border-b-[3px] hover:border-[#1d1d1fb3]">
            facebook
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            focusable="false"
            viewBox="0 0 24 24"
            color="rgb(29, 29, 31)"
            style={{
              userSelect: "none",
              width: "6.5%",
              height: "6.5%",
              display: "inline-block",
              fill: "rgb(29, 29, 31)",
              flexShrink: 0,
              rotate: "45deg",
              fontWeight: "bolder",
            }}
          >
            <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default LetsWorkTogether;
