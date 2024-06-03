// src/Experience.js
import React, { useState } from 'react';
import SvgBorder from './partials/SvgBorder'; 

const Experience = () => {
  const [data] = useState([
    { id: 1, title: "clavmen studio", subtitle: "senior ui designer", year: "2024 — Present", description: "Clavemen inspires creativity and makes learning piano fun. The sleek, lightweight body fits easily into gig bags for portability." },
    { id: 2, title: "losify", subtitle: "lead product designer", year: "2013 — 2022", description: "Fitness and well-being with personalized coaching and innovative wellness solutions" },
    { id: 3, title: "gamadis", subtitle: "junior ux designer", year: "2012 — 2013", description: "Gaming EXperiences with Innovative Technology and Unparalleled Performance" },
    { id: 4, title: "freelance", subtitle: "web designer", year: "2010 — 2012", description: "Bringing creativity, technical expertise, and a passion for design to every project", noBorders: true }
  ]);

  return (
    <div className="w-full mt-7 lg:my-20">
      <div className="left_right lg:flex items-start justify-between lg:px-10 py-5 px-8">
        <div className="left lg:w-[23%] lg:sticky lg:top-20">
          <h1 className="uppercase text-[40px] lg:text-[30px] leading-[30px] mb-16 lg:mb-0 font-bold">
            Experience
          </h1>
        </div>
        <div className="more lg:w-[77%] right">
          {data.map((elem, index) => (
            <div key={index} className="cards lg:mb-10 md:mb-10 mb-12 lg:pt-5 w-full h-[310px] md:h-[280px] lg:h-[250px]">
              <h1 className="uppercase text-[30px] leading-[30px] mb-5 font-bold">
                {elem.title}
              </h1>
              <div className="title_yrs lg:flex items-center justify-between">
                <h2 className="uppercase text-[22px] leading-[26px] mb-5 font-bold">
                  {elem.subtitle}
                </h2>
                <h3 className="uppercase text-[20px] lg:text-[22px] leading-[22px] mb-5 font-bold">
                  {elem.year}
                </h3>
              </div>
              <p className="text-[20px] leading-[31px] font-medium text-[#1d1d1fb3] ">
                {elem.description}
              </p>
              {!elem.noBorders && <SvgBorder />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
