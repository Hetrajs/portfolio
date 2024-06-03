import React from "react";

const Motivation = () => {
  return (
    <div className="w-full pb-10">
      <div className="left_right lg:flex items-start justify-between py-10 lg:px-10 px-8">
        <div className="left lg:w-[23%]">
          <h1 className="uppercase text-[40px] lg:text-[30px] leading-[30px] mb-10 font-bold">
            motivation
          </h1>
        </div>
        <div data-scroll data-scroll-speed=".1" className="more lg:w-[77%] right">
          <p className="mobile lg:hidden font-semibold text-[24px] md:text-[24px] leading-[32px] ">
            More than a job, web design is an outlet for your vision. You have
            the power to take an idea from concept to reality. Your sites can
            tell a story, <strong className=" italic">"show off a brand"</strong>, or change lives.
          </p>
          <p className="hidden lg:text-[24px] lg:leading-[34px] lg:block">
            More than a job, web design is an outlet for your vision. You have
            the power to take an idea from concept to reality. Your sites can
            tell a story, <strong className=" italic">"show off a brand"</strong>, or change lives. As the web
            expands, so do the possibilities. You also have the flexibility to
            work remotely or in a fun agency setting. And nothing beats the
            rush of seeing your live sites in action.
          </p>
          <p className="mobile  font-semibold text-[24px] md:text-[24px] leading-[32px] lg:hidden mt-12">
            As the web expands, so do the possibilities. You also have the
            flexibility to work remotely or in a fun agency setting. And
            nothing beats the rush of seeing your live sites in action.
          </p>
          <p className="mt-12 lg:text-[24px] lg:leading-[34px] hidden lg:block">
            As a web designer, you get to blend art and technology to create
            "digital experiences" that inform, entertain, and inspire. Every
            day is different - one day you may be sketching site layouts on
            paper, the next you're coding up responsive page templates. Web
            design keeps you on your toes!
          </p>
        </div>
      </div>
      <div className="picture mt-10 px-3 h-[90vh] m-auto lg:h-[97vh] md:h-[50vh] lg:px-5 overflow-hidden">
        <img data-scroll data-scroll-speed="-.1"
          className="w-full rounded-3xl h-full object-cover"
          src="https://images.pexels.com/photos/1910236/pexels-photo-1910236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
      </div>
    </div>
  );
};

export default Motivation;