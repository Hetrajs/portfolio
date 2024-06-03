import React from "react";
// import ProfileImg from "../../img/1663333789521.jpg";
import Profileimg from "../../img/ProImg.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="w-full min-h-screen py-20 lg:mt-10">
      <div className="about_heading text-center uppercase mb-16">
        <span className="inline-block w-full h-full overflow-hidden">
        <motion.h1 initial={{ y: "100%" }} whileInView={{ y: 0 }} transition={{ ease: "linear", duration: .5}} className="text-[40px] lg:text-[110px] leading-none font-bold tracking-tight">
          More about
        </motion.h1>
        </span>
        <span className="inline-block w-full h-full overflow-hidden">
        <motion.h1 initial={{ y: "100%" }} whileInView={{ y: 0 }} transition={{ ease: "linear", duration: .5}} className="text-[40px] lg:text-[110px] leading-none font-bold tracking-tight">
          hetraj&copy;
        </motion.h1>
        </span>
      </div>
      <div className="image overflow-hidden mb-20">
        <img 
          className="w-[90%] md:w-[95%] lg:w-[50%] mx-auto h-[90vh] md:h-[130vh] lg:h-[160vh] object-cover rounded-full md:rounded-[300px] lg:rounded-full"
          src={Profileimg}
          alt=""
        />
      </div>
      <div className="heading mb-7 lg:mb-10">
        <p className="text-[24px] lg:text-[30px] font-bold leading-7 lg:leading-[38px] text-center mx-auto w-[81%] md:w-[95%] mb-10">
          I'M AN INNOVATIVE DESIGNER AND DIGITAL ARTIST IN INDIA. MY PASSION FOR
          MINIMALIST AESTHETICS, ELEGANT TYPOGRAPHY, AND INTUITIVE DESIGN SHINES
          THROUGH IN MY WORK.
        </p>
        <p className="subheading lg:hidden leading-8 text-center mx-auto w-[80%] ">
          I'm on the edge of code tools that allow me to bring my creativity to
          life.
        </p>
        <p className="hidden lg:block text-center w-[90%] mx-auto subheading leading-[32px] text-[24px] font-medium">
        I'm on the cutting edge of no-code tools that allow me to bring my creative visions to life. Though my methods may be unconventional, my dedication to the craft is unparalleled. I thrive on finding <strong className=" italic">"unexpected solutions"</strong> and believe that with the right perspective, design can elevate the human experience.
        </p>
      </div>
      <div className="flex items-center justify-center">
        <Link className="text-[1.18rem] md:text-[1.15rem] lg:text-[1.125rem] bg-[#1d1d1f] text-white px-5 py-3 md:py-4 md:px-5 lg:px-6 lg:py-3 rounded-full lg:hover:bg-white lg:hover:text-[#1d1d1f] hover:font-bold lg:hover:border-zinc-900 lg:hover:border-2 uppercase outline-none font-bold duration-300">
          download resume
        </Link>
      </div>
    </div>
  );
};

export default About;
