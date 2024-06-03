import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import Model from "./partials/Model";
import { motion } from "framer-motion";

const MyExpertise = () => {
  const [data] = useState([
    {
      id: 1,
      price: "5,999",
      name: "ui design",
      description:
        "Blending aesthetics and innovation, my Ui gives you a top notch clients.",
      image:
        "https://framerusercontent.com/images/00TWqJeQJSUSatFO6IibxLRMh8Y.jpeg?scale-down-to=1024",
    },
    {
      id: 2,
      price: "13,999",
      name: "web design",
      description:
        "Web designing is one my high end skill that i give to my customers.",
      image:
        "https://framerusercontent.com/images/9bl0O0oKvDqFFnmoTxGMBNrbc7o.jpeg?scale-down-to=1024",
    },
    {
      id: 3,
      price: "8,999",
      name: "3d rendering",
      description:
        "Giving my great option to my clients to show off their 3D dynamic area.",
      image:
        "https://framerusercontent.com/images/ewc7q3A89N8QRXYwoCVyOlxiv6w.jpeg?scale-down-to=512",
    },
    {
      id: 4,
      price: "2,999",
      name: "ai images",
      description:
        "I am dealing with a professional next level photography and videography.",
      image:
        "https://framerusercontent.com/images/uyOvejzlUGTSKWp3b44CHM8qOM.jpeg?scale-down-to=1024",
    },
    {
      id: 5,
      price: "7,999",
      name: "MOTION GRAPHIcs",
      description:
        "I will do a cinematic motion graphics to all creators and production companies.",
      image:
        "https://framerusercontent.com/images/p4WvRl2AYCVKzdHvVXkNPq3u2w.jpeg?scale-down-to=1024",
    },
  ]);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  const toggleSidebar = (id) => {
    setIsOpen(!isOpen);
    setSelectedData(data.find((item) => item.id === id));
  };

  const [details] = useState([
    {
      id: 1,
      name: "app design",
      description:
        "Craft intuitive navigation that makes features accessible. Choose layouts and graphics that fit your app's personality.",
    },
    {
      id: 2,
      name: "web design",
      description:
        "Polish animations and microinteractions that add delight. Every detail matters when sculpting an web.",
      isActive: true,
    },
    {
      id: 3,
      name: "3D rendering",
      description:
        "The process involves building virtual 3D models and materials, setting lighting, and then rendering the final images.",
    },
    {
      id: 4,
      name: "ai images",
      description:
        "With the click of a shutter, an image is imprinted that tells a story or makes a wonderful statement.",
    },
    {
      id: 5,
      name: "MOTION GRAPHICS",
      description:
        "The interplay between graphic elements, typography and movement opens up a world of creative possibilities.typography and movement.",
    },
  ]);

  return (
    <div className="w-full min-h-screen py-16 flex flex-col px-5 lg:px-10">
      <Model isOpen={isOpen} handleClick={toggleSidebar} data={selectedData} />
      <div className="heading font-bold leading-none uppercase mb-10">
        <span className="inline-block w-full h-full overflow-hidden">
          <motion.h1 initial={{ y: "100%" }} whileInView={{ y: 0 }} transition={{ ease: "linear", duration: .5}} className="text-[40px] lg:text-[90px] leading-none">My</motion.h1>
        </span>
        <span className="inline-block w-full h-full overflow-hidden">
          <motion.h1 initial={{ y: "100%" }} whileInView={{ y: 0 }} transition={{ ease: "linear", duration: .5}} className="text-[40px] lg:text-[90px] leading-none">expertise</motion.h1>
        </span>
      </div>
      {details.map((elem, index) => (
        <div
          key={index}
          className="card mt-5 rounded-xl p-8 lg:px-7 lg:pt-3 lg:pb-10 bg-[#f5f5f7]"
        >
          <div className="close_tag hidden lg:flex cursor-pointer items-center justify-end w-full h-[90px]">
            <div className="w-12 lg:w-[50px] lg:h-[50px] h-12 flex justify-center items-center rounded-full bg-[#333336]">
              <IoCloseSharp
                onClick={() => toggleSidebar(elem.id)}
                className="text-[#a5a5a7] text-3xl hover:rotate-[90deg] duration-500"
              />
            </div>
          </div>
          <h1 className="text-[16px] font-bold mb-4">( {elem.id} )</h1>
          <div className="name flex items-center mb-7 gap-3">
            <h1 className="text-[30px] whitespace-nowrap text-[#1d1d1f] leading-[26px] font-bold uppercase">
              {elem.name}
            </h1>
            <span
              className={`bg-[#e4e4e6] ${
                elem.isActive === true ? "block" : "hidden"
              } text-sm font-bold text-[#585863b3] rounded-full px-4 py-1.5`}
            >
              PRO
            </span>
          </div>
          <p className="text-[20px] font-medium leading-[31px] text-[#1d1d1fb3] ">
            {elem.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default MyExpertise;
