import React, { useState } from "react";

const FavouriteStack = () => {
  const [data] = useState([
    {
      id: 1,
      image:
        "https://framerusercontent.com/images/8IwIgcK4xKufK1r1bGdf5fwrWek.png",
      title: "Framer",
      subtitle: "web design",
      percentage: "95%",
      desc: "The internet is your canvas. Framer is where design and publish stunning sites based in India",
    },
    {
      id: 2,
      image:
        "https://framerusercontent.com/images/TZGKAHVLPTSUJdTkEUZl8tby7i8.png",
      title: "figma",
      subtitle: "design tool",
      percentage: "57%",
      desc: "Figma is a collaborative web application for design with additional offline features for macOS and Windows.",
    },
    {
      id: 3,
      image:
        "https://framerusercontent.com/images/QYmq308u4qG3O15gu4OOjuYYbyo.png",
      title: "Javascript",
      subtitle: "development",
      percentage: "75%",
      desc: "JavaScript, often abbreviated as JS, is a programming language and technology alongside HTML and CSS.",
    },
    {
      id: 4,
      image:
        "https://w7.pngwing.com/pngs/79/518/png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail.png",
      title: "react",
      subtitle: "front-end",
      percentage: "68%",
      desc: "The internet is your canvas. Framer is where design and publish stunning sites based in India",
    },
  ]);
  return (
    <div className="w-full py-0">
      <div className="left_right lg:flex items-start justify-between lg:px-10 py-5 px-5">
        <div className="left lg:w-[23%] lg:sticky px-8 lg:px-0 lg:top-20">
          <h1 className="uppercase text-[40px] lg:text-[30px] leading-[40px] lg:leading-[30px] lg:mb-0 font-bold">
            Favourite
          </h1>
          <h1 className="uppercase text-[40px] lg:text-[30px] leading-[40px] lg:leading-[30px] mb-16 lg:mb-0 font-bold">
            Stack
          </h1>
        </div>
        <div className="more lg:w-[77%] right">
          {data.map((elem, index) => (
            <div key={index} className="cards overflow-hidden lg:mb-10 bg-[#f5f5f7] rounded-lg md:mb-10 mb-12 p-5 lg:p-7  w-full h-[500px] md:h-[400px] flex flex-col gap-6 lg:h-[420px]">
              <div className="top w-full rounded-lg bg-[#fafafa] h-[20%] lg:h-[30%]">
                <div className="picture w-full h-full flex items-center justify-center  overflow-hidden">
                  <img
                    className="object-cover w-[50px] h-[50px] lg:w-[60px] lg:h-[60px]"
                    src={elem.image}
                    alt=""
                  />
                </div>
              </div>
              <div className="bottom px-7 py-10 rounded-lg w-full bg-[#fafafa] h-[80%] lg:h-[70%]">
                <h1 className=" uppercase text-[24px] md:text-[24px] md:mb-7 leading-[20px] mb-5 font-bold ">
                  {elem.title}
                </h1>
                <div className="title_percent lg:flex items-center justify-between">
                  <h3 className=" uppercase text-[20px] md:text-[20px] md:mb-7 leading-[20px] mb-5 font-bold ">
                    {elem.subtitle}
                  </h3>
                  <h5 className=" uppercase text-[20px] md:text-[20px] md:mb-7 leading-[20px] mb-8 font-bold ">
                    {elem.percentage}
                  </h5> 
                </div>
                <p className="interFont text-[20px] text-[#1d1d1fb3] leading-[31px]">
                  {elem.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FavouriteStack;
