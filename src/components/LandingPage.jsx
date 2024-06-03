import gsap, { Power3, Power4, ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";
import Globe  from "../../img/globeEdit.mp4"

const LandingPage = () => {
  // gsap applying for navbar
  // use refs
  const name = useRef(null);
  const surname = useRef(null);
  const text = useRef(null);
  const video = useRef(null);

  // gsap begining
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline();
    tl.to(name.current, {
      y: 0,
      opacity: 1,
      ease: "cubic-bezier(0.32, 0, 0.67, 0)",  
      duration: 1.2,
      delay: .2
    });
    tl.to(surname.current, {
      y: 0,
      opacity: 1,
      ease: "cubic-bezier(0.32, 0, 0.67, 0)",  
      duration: 1.2,
      delay: -.3
    });
    tl.to(text.current, {
      y: 0,
      opacity: 1,
      ease: Power4.easeIn, 
      duration: 1,
      delay: -.5
    },'a');
    tl.to(video.current, {
      y: 0,
      opacity: 1,
      ease: "cubic-bezier(0.32, 0, 0.67, 0)", 
      duration: 1.5,
      delay: -.5
    },'a');
  }, []);   

  return (
    <div className="home px-5 py-2 lg:py-0 w-full min-h-screen">
      <div className="title pt-24 lg:pt-10 flex items-center justify-center w-full uppercase">
        <div className="avaibale hidden mt-10 lg:flex relative">
          <span className=" before:content-[''] before:absolute before:w-2.5 before:h-2.5 before:bg-green-500 before:top-[8px] before:-left-6 before:rounded-full"></span>
          <h3 className="text-[17px] md:text-[18px] font-semibold tracking-wide text-zinc-600 mb-8 lg:mb-5">
            Available for Freelance
          </h3>
        </div>
        <div className="digital lg:hidden relative">
          <span className=" before:content-[''] before:absolute before:w-2.5 before:h-2.5 before:bg-green-500 before:top-[8px] before:-left-6 before:rounded-full"></span>
          <h3 className="text-[17px] md:text-[18px] font-semibold tracking-wide text-zinc-600 mb-8">
            Digital Designer
          </h3>
        </div>
      </div>
      <div className="name text-[#1d1d1f] overflow-hidden uppercase font-bold">
        <h1 ref={name} className="text-[3.1rem] translate-y-52 text-center md:text-[3.4rem] lg:text-[90px] tracking-tight leading-none">
          hetrajsinh
        </h1>
        <h1 ref={surname} className="text-[3.1rem] translate-y-52 leading-none text-center md:text-[3.4rem] lg:text-[90px]">
          Raj
        </h1>
      </div>
      <div ref={text} className="live_ hidden translate-y-[100%] opacity-0 lg:flex items-center lg:px-5 justify-between uppercase mt-24">
        <h3 className="font-semibold text-[17px] text-[#383838]">
          Based in India, Gujarat
        </h3>
        <div className="digital_backend flex items-center gap-1">
          <span className="font-semibold text-[17px] text-[#383838] cursor-pointer duration-200 origin-left lg:hover:border-b-2 lg:hover:border-[#383838]">
            Digital designer
          </span>
          <h3 className="text-[#1d1d1f99] font-semibold">
            {" "}
            + backend developer
          </h3>
        </div>
      </div>
      <div ref={video} className="video opacity-0 translate-y-[100%] mt-16 md:mt-64 lg:mt-5 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="w-full h-[80vh] lg:h-[100vh] object-cover object-center rounded-2xl outline-none border-none"
          src={Globe}
        ></video>
        {/* https://videos.pexels.com/video-files/4431790/4431790-uhd_3840_2160_30fps.mp4 video1 */}
        {/* {https://videos.pexels.com/video-files/4965872/4965872-uhd_4096_2160_25fps.mp4} */}
        {/* https://videos.pexels.com/video-files/10523124/10523124-uhd_3840_2160_30fps.mp4 */}
      </div>
    </div>
  );
};

export default LandingPage;
