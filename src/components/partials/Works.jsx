import React, { useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../Navbar2';
import SvgBorder from '../partials/SvgForWork';
import Footer from "../Footer";
import { DataContext } from '../../context/DataContext';
import { BsBoxArrowUpRight } from "react-icons/bs";

const Works = () => {
  const { name } = useParams();
  const { details } = useContext(DataContext);

  const work = details.find(project => project.name === name);

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  if (!work) {
    return <div>Work not found for name: {name}</div>;
  }


  return (
    <>
      <div className='w-full overflow-x-hidden'>
        <Navbar />
        <div className='w-full h-full mt-20 lg:mt-32 px-5 lg:px-10 py-4'>
          <h1 className='uppercase font-bold tracking-tight text-[50px] leading-[50px]'>{work.projectName}<span>&#174;</span></h1>
          <p className='interFont mt-8 text-[23px] text-[#1d1d1fb3] leading-[34px] md:w-11/12'>{work.projectDescription}</p>
          <div className="box mt-20">
            <div className="client flex uppercase font-semibold justify-between">
              <h1 className='text-[20px] text-[#1d1d1fb3] leading-[28px] '>Client</h1>
              <h1 className='text-[20px] leading-[28px] '>{work.clientName}</h1>
            </div>
            <SvgBorder />
            <div className="year flex uppercase font-semibold justify-between">
              <h1 className='text-[20px] text-[#1d1d1fb3] leading-[28px] '>Year</h1>
              <h1 className='text-[20px] leading-[28px] '>{work.year}</h1>
            </div>
            <SvgBorder />
            <div className="category flex uppercase font-semibold justify-between">
              <h1 className='text-[20px] text-[#1d1d1fb3] leading-[28px] '>Category</h1>
              <h1 className='text-[20px] leading-[28px] '>{work.category}</h1>
            </div>
            <SvgBorder />
            <div className="livePprojects flex uppercase font-semibold justify-between">
              <h1 className='text-[20px] text-[#1d1d1fb3] leading-[28px] '>Live Project</h1>
              <Link to={work.liveProjects} className="visitSite flex items-start gap-2">
                <h1 className='text-[20px] leading-[28px] '>Visit Site</h1>
                <BsBoxArrowUpRight/>
              </Link>
            </div>
          </div>
          <div className="picture mt-16 overflow-hidden w-full h-[80vh] md:h-[60vh] lg:h-[110vh]">
            <img className='w-full h-full object-cover rounded-3xl' src={work.image1} alt="" />
          </div>
          <div className="research mt-16">
            <h1 className='text-[30px] text-[#1d1d1f] font-semibold uppercase leading-[30px]'>Research</h1>
            <p className='text-[24px] tracking-normal mt-5 text-[#1d1d1fb3] font-medium leading-[34px]'>{work.researchDescription}</p>
          </div>
          <br />
          <SvgBorder />
          <br />
          <div className="design mt-3">
            <h1 className='text-[30px] text-[#1d1d1f] font-semibold uppercase leading-[30px]'>Design</h1>
            <p className='text-[24px] tracking-normal mt-5 text-[#1d1d1fb3] font-medium leading-[34px]'>{work.designDescription}</p>
          </div>
          <br />
          <SvgBorder />
          <br />
          <div className="development mt-3">
            <h1 className='text-[30px] text-[#1d1d1f] font-semibold uppercase leading-[30px]'>Development</h1>
            <p className='text-[24px] tracking-normal mt-5 text-[#1d1d1fb3] font-medium leading-[34px]'>{work.developmentDescription}</p>
          </div>
          <div className="picture mt-16 overflow-hidden w-full h-[80vh] md:h-[60vh] lg:h-[110vh]">
            <img className='w-full h-full object-cover rounded-3xl' src={work.image2} alt="" />
          </div>
          <div className="concept mt-16">
            <h1 className='text-[30px] text-[#1d1d1f] font-semibold uppercase leading-[30px]'>Concept</h1>
            <p className='text-[24px] tracking-normal mt-5 text-[#1d1d1fb3] font-medium leading-[34px]'>{work.conceptDescription}</p>
          </div>
          <div className="picture mt-16 overflow-hidden w-full h-[80vh] md:h-[60vh] lg:h-[110vh]">
            <img className='w-full h-full object-cover rounded-3xl' src={work.image3} alt="" />
          </div>
          <div className="picture mt-7 overflow-hidden w-full h-[80vh] md:h-[60vh] lg:h-[110vh]">
            <img className='w-full h-full object-cover rounded-3xl' src={work.image4} alt="" />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Works;
