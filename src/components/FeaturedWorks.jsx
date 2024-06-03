import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FeaturedWorks = () => {
    const [details] = useState([
        { id: 1, image: "https://framerusercontent.com/images/qBAjeNJY3IsvVWSmaixag3ucDo.jpeg?scale-down-to=2048", title: "Project 1", description: "Business", year: 2024, link: "/works/hella-magic" },
        { id: 2, image: "https://framerusercontent.com/images/qBAjeNJY3IsvVWSmaixag3ucDo.jpeg?scale-down-to=2048", title: "Project 2", description: "Portfolio", year: 2024, link: "/works/bci-trading-company" },
        { id: 3, image: "https://framerusercontent.com/images/qBAjeNJY3IsvVWSmaixag3ucDo.jpeg?scale-down-to=2048", title: "Project 3", description: "Agency", year: 2024, link: "/works/project3" },
        { id: 4, image: "https://framerusercontent.com/images/qBAjeNJY3IsvVWSmaixag3ucDo.jpeg?scale-down-to=2048", title: "Project 4", description: "Marketplace", year: 2024, link: "/works/project4" },
        { id: 5, image: "https://framerusercontent.com/images/qBAjeNJY3IsvVWSmaixag3ucDo.jpeg?scale-down-to=2048", title: "Project 5", description: "Themes", year: 2024, link: "/works/project5" },
        { id: 6, image: "https://framerusercontent.com/images/qBAjeNJY3IsvVWSmaixag3ucDo.jpeg?scale-down-to=2048", title: "Project 6", description: "Branding", year: 2024, link: "/works/project6" },
    ]);


    return (  
        <div className='w-full min-h-screen'>    
            <div className="heading uppercase text-center py-16 lg:pt-36">
                <span className='overflow-hidden inline-block w-full h-full'>
                    <motion.h1 initial={{ y: "100%" }} whileInView={{ y: 0 }} transition={{ ease: "linear", duration: .5}} className='text-[40px] lg:text-[90px] font-bold leading-none tracking-tight'>Featured</motion.h1>
                </span>
                <span className='overflow-hidden inline-block w-full h-full'>
                    <motion.h1 initial={{ y: "100%" }} whileInView={{ y: 0 }} transition={{ ease: "linear", duration: .5}} className='text-[40px] lg:text-[90px] font-bold leading-none tracking-tight'>work</motion.h1>
                </span>
            </div>
            <div className="cards w-full min-h-screen md:grid md:grid-cols-1 lg:grid-cols-2 gap-x-6 px-5">
                {details.map((elem, index) => (
                    <Link key={index} to={elem.link}>
                        <div className="card rounded-xl mt-5 md:mt-7 overflow-hidden w-full lg:w-[100%]">
                            <div className="picture overflow-hidden">
                                <img className='w-full h-[200px] md:h-[180px] hover:scale-[1.2] duration-300 lg:h-[298px] object-cover' src={elem.image} alt="" />
                            </div>
                            <div className="content p-7 bg-[#f5f5f7] flex items-center justify-between">
                                <div className="name_desc">
                                    <h1 className=' uppercase text-[20px] font-semibold'>{elem.title}</h1>
                                    <h3 className='text-[18px] font-medium text-zinc-600'>{elem.description}</h3>
                                </div>
                                <button className='bg-[#e4e4e6] py-2 px-5 rounded-full text-[#5b5b5b] font-semibold text-base'>{elem.year}</button>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default FeaturedWorks;
