import { motion } from "framer-motion";
import React, { useState } from "react";
import { RiCloseLargeLine } from "react-icons/ri";

const AskQuestions = () => {
  const [expanded, setExpanded] = useState(null);

  const questions = [
    {
      question: "WHAT INDUSTRIES DO YOU SPECIALIZE IN?",
      text: "I have experience working across various industries including but not limited to technology, healthcare, fashion, hospitality, and non-profit organizations.",
    },
    {
      question: "WHAT SERVICES DO YOU OFFER AS A DESIGNER?",
      text: "As a designer, I offer a range of services including graphic design, web design, branding, illustration, and more. My goal is to provide creative solutions that effectively communicate your message and resonate with your audience.",
    },
    {
      question: "Can you provide examples of your previous work?",
      text: "Absolutely! You can browse through my portfolio on this website to see a selection of my previous projects. Each project showcases my design capabilities and creative approach across various mediums and industries.",
    },
    {
      question: "How do you approach branding projects?",
      text: "When it comes to branding projects, I believe in delving deep into understanding the client's brand identity, target audience, and market positioning. I strive to create cohesive visual identities that effectively communicate the brand's values and personality across various touchpoints, including logos, color palettes, typography, and brand guidelines.",
    },
    {
      question: "Can you walk me through your design process?",
      text: "Certainly! My design process typically involves understanding the client's needs and objectives, conducting research, brainstorming ideas, sketching concepts, refining designs, and delivering high-quality final products.",
    },
  ];

  return (
    <div className="w-full lg:min-h-screen mt-10  md:mt-14 lg:mt-28">
      <div className="heading uppercase text-center">
        <span className="inline-block w-full h-full overflow-hidden">
        <motion.h1 initial={{ y: "100%" }} whileInView={{ y: 0 }} transition={{ ease: "linear", duration: .5}} className="text-[40px] tracking-tight leading-[30px] lg:text-[50px] lg:leading-[50px] font-bold ">
          frequently
        </motion.h1>
        </span>
        <span className="inline-block w-full h-full overflow-hidden">
        <motion.h1 initial={{ y: "100%" }} whileInView={{ y: 0 }} transition={{ ease: "linear", duration: .5}} className="text-[40px] tracking-tight lg:text-[50px] lg:leading-[50px] whitespace-nowrap leading-[48px] font-bold">
          asked question
        </motion.h1>
        </span>
      </div>
      <div className="lists w-full mt-10 lg:mt-20 h-full px-5 lg:px-20">
        {questions.map((item, index) => (
          <div
            key={index}
            className={`list flex flex-col rounded-2xl mt-5 justify-between bg-[#f5f5f7] p-8 w-full transition-height duration-300 ${expanded === index && 'h-auto'}`}
          >
            <div className="flex items-center justify-between duration-500 cursor-pointer" onClick={() => setExpanded(expanded === index ? null : index)}>
              <h1 className="text-[20px] uppercase w-3/4 font-semibold leading-[28px]">{item.question}</h1>
              <RiCloseLargeLine className={`text-2xl transition-transform duration-300 ${expanded === index ? 'rotate-0' : 'rotate-45'}`} />
            </div>
            {expanded === index && <p className="duration-500 opacity-90 text-[#1d1d1fb3] interFont text-[20px] mt-4 pt-4 border-t-[1px] border-zinc-400">{item.text}</p>}
          </div>  
        ))}
      </div>
    </div>
  );
};

export default AskQuestions;
