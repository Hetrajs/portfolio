import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import { FiArrowUpRight } from "react-icons/fi";
import gsap, { Power3, ScrollTrigger } from "gsap/all";
import { motion } from "framer-motion";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString("en-US", { hour12: false })
  );

  //   useEffect(() => {
  //     const intervalId = setInterval(() => {
  //       setCurrentTime(new Date().toLocaleTimeString("en-US", { hour12: false }));
  //     }, 1000);

  //     return () => clearInterval(intervalId);
  //   }, []);




  // gsap applying for navbar
  // use refs
  const nav = useRef(null);

  // gsap begening
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline();
    tl.to(nav.current, {
      y: 0 ,
      opacity: 1,
      ease: 'linear', 
      duration: 0.5,
      delay: 0.3
    })
  }, []);


  return (
    <>
      {/*TOGGLE MENU  */}

      <div
        className={`toggle_menu bottom-0 fixed z-[999] left-0 bg-white w-full h-screen transition-transform duration-500 ease-in transform ${
          isOpen ? "-translate-y-0" : "translate-y-[100vh]"
        }`}
      >
        <div className="navtop py-12 px-6 lg:px-9 h-[123px] flex justify-between items-center mb-16 md:mb-40 lg:mb-2">
          <h1 className="hidden text-lg font-medium lg:inline-flex gap-1">
            <span className=" text-zinc-500 uppercase">Local/</span>{" "}
            {currentTime}
          </h1>
          <div className="close_tag pt-32 ml-2 md:ml-2 lg:ml-9 flex cursor-pointer items-center justify-center lg:mt-0  w-full h-[90px]">
            <div className="w-12 lg:w-[50px] lg:h-[50px] h-12 flex justify-center lg:pt-0 items-center rounded-full bg-[#333336]">
              <IoCloseSharp
                onClick={toggleSidebar}
                className="text-[#a5a5a7] text-3xl hover:rotate-[90deg] duration-300"
              />
            </div>
          </div>
          <div className="schedule_call hidden lg:flex">
            <Link className="text-[.68rem] lg:text-[1.1rem] whitespace-nowrap w-full bg-[#1d1d1f] text-white px-3.5 py-3 md:py-5 md:px-5 lg:px-4 lg:py-3 rounded-full lg:hover:bg-white lg:hover:text-[#1d1d1f] lg:hover:border-zinc-900 lg:hover:border-2 uppercase hover:font-bold outline-none font-bold duration-300">
              Schedule a call
            </Link>
          </div>
        </div>

        <div className="links mt-20 lg:mt-0 cursor-pointer uppercase">
          <span className="flex flex-col p-1 lg:p-0 items-center justify-center w-full h-full overflow-hidden">
          <motion.h1 initial={{ y: "100%" }} whileInView={{ y: 0 }} transition={{ ease: Power3.easeInOut, duration: .7}} className="text-[50px] lg:text-[80px] leading-[50px] lg:leading-[70px] tracking-tighter flex font-black">
            <sup className="text-lg lg:text-sm lg:tracking-tight text-zinc-600">
              ( 1 )
            </sup>
            HOME
          </motion.h1>
          </span>
          <span className="flex flex-col p-1 lg:p-0 items-center justify-center w-full h-full overflow-hidden">
          <motion.h1 initial={{ y: "100%" }} whileInView={{ y: 0 }} transition={{ ease: Power3.easeInOut, duration: .7}} className="text-[50px] lg:text-[80px] leading-[30px] lg:leading-[70px] tracking-tighter font-black">
            <sup className="text-base lg:tracking-tight lg:text-sm text-zinc-600"></sup>
            work
          </motion.h1>
          </span>
          <span className="flex flex-col p-1 lg:p-0 items-center justify-center w-full h-full overflow-hidden">
          <motion.h1 initial={{ y: "100%" }} whileInView={{ y: 0 }} transition={{ ease: Power3.easeInOut, duration: .7}} className="text-[50px] lg:text-[80px] leading-[30px] lg:leading-[70px] tracking-tighter font-black">
            <sup className="text-base lg:tracking-tight lg:text-sm text-zinc-600"></sup>
            photography
          </motion.h1>
          </span>
          <span className="flex flex-col p-1 lg:p-0 items-center justify-center w-full h-full overflow-hidden">
          <motion.h1 initial={{ y: "100%" }} whileInView={{ y: 0 }} transition={{ ease: Power3.easeInOut, duration: .7}} className="text-[50px] lg:tracking-tight lg:text-[80px] leading-[30px] lg:leading-[70px] tracking-tighter font-black">
            <sup className="text-base lg:text-sm text-zinc-600"></sup>pricing
          </motion.h1>
          </span>
          <span className="flex flex-col p-1 lg:p-0 items-center justify-center w-full h-full overflow-hidden">
          <motion.h1 initial={{ y: "100%" }} whileInView={{ y: 0 }} transition={{ ease: Power3.easeInOut, duration: .7}} className="text-[50px] lg:tracking-tight lg:text-[80px] leading-[30px] lg:leading-[70px] tracking-tighter font-black">
            <sup className="text-base lg:text-sm text-zinc-600"></sup>contact
          </motion.h1>
          </span>
        </div>

        <div className="copy_socials px-9 mt-10 lg:mt-20 hidden lg:flex items-center lg:justify-between">
          <h1 className="text-lg text-center font-semibold">
            &copy; <strong>2024</strong> all rights reserved
          </h1>
          <div className="social_links flex text-lg font-bold uppercase items-center gap-7">
            <div className="instagram flex items-center justify-center gap-1">
              <h1>instagram</h1>
              <FiArrowUpRight />
            </div>
            <div className="linkedIn flex items-center justify-center gap-1">
              <h1>linkedIn</h1>
              <FiArrowUpRight />
            </div>
            <div className="facebook flex items-center justify-center gap-1">
              <h1>facebook</h1>
              <FiArrowUpRight />
            </div>
          </div>
        </div>

        <div className="bottom lg:hidden absolute w-full bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/4">
          <div className="c_right uppercase mt-10 md:mt-0">
            <h1 className="text-lg text-center font-semibold">
              &copy; <strong>2024</strong> ALL rights reserved
            </h1>
          </div>
          <div className="social_links mt-3 md:mt-0 text-2xl font-bold uppercase">
            <div className="instagram flex items-center justify-center mt-10 gap-1">
              <h1>instagram</h1>
              <FiArrowUpRight />
            </div>
            <div className="linkedIn flex items-center justify-center mt-5 gap-1">
              <h1>linkedIn</h1>
              <FiArrowUpRight />
            </div>
            <div className="facebook flex items-center justify-center mt-5 gap-1">
              <h1>facebook</h1>
              <FiArrowUpRight />
            </div>
          </div>
        </div>
      </div>

      {/* NAVBAR */}

      <div ref={nav} className="w-full -translate-y-[100%] opacity-0 py-12 px-6 lg:px-9 h-[107px] flex justify-between items-center border-b-[1.5px]">
        <h1 className="hidden text-lg font-medium lg:block">
          <span className=" text-zinc-500 uppercase">Local/ </span>
          {currentTime}
        </h1>
        <h1 className="lg:hidden text-zinc-600 font-medium text-[1.1rem]">
          {currentTime}
        </h1>
        <div onClick={toggleSidebar} className="menu ml-12 md:ml-14 lg:ml-8 ">
          <svg
            xmlnsXlink="http://www.w3.org/1999/xlink"
            className="rotate-[8deg] hover:rotate-[70deg] duration-500 w-10 h-6 md:h-6 lg:h-5 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="19"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              d="M4.83371 10.698L2.16394 11.1187L2.58773 13.7744L5.2575 13.3538L4.83371 10.698Z"
              fill="#1d1d1f"
            />
            <path
              d="M3.45369 2.01183L0.780884 2.43201L1.20351 5.08649L3.87631 4.66631L3.45369 2.01183Z"
              fill="#1d1d1f"
            />
            <path
              d="M12.6177 3.29212L12.195 0.636597L9.52112 1.05811L9.94531 3.71218L12.6177 3.29212Z"
              fill="#1d1d1f"
            />
            <path
              d="M10.9048 9.74124L11.329 12.3968L13.9985 11.9782L13.5772 9.32263L10.9048 9.74124Z"
              fill="#1d1d1f"
            />
          </svg>
        </div>
        <Link className="text-[.68rem] lg:text-[1.125rem] bg-[#1d1d1f] text-white px-3.5 py-3 md:py-3 md:px-5 lg:px-6 lg:py-3 rounded-full lg:hover:bg-white lg:hover:text-[#1d1d1f] lg:hover:border-zinc-900 lg:hover:border-2 uppercase outline-none font-bold duration-300">
          Contact Now
        </Link>
      </div>
    </>
  );
};

export default Navbar;
