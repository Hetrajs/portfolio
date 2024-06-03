import React from 'react';

const Footer = () => {
  const scrollToTop = () => {
    document.documentElement.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='w-full my-14 mt-16'>
        <h1 className='text-[50px] text-center lg:text-[116px] lg:leading-[100px] leading-[53px] tracking-normal uppercase font-bold'>hetrajsinh</h1>
        <div className="reserved_backtop lg:px-10 text-[18px] mt-10 lg:mt-20 flex flex-col lg:flex-row items-center lg:justify-between gap-5 font-semibold uppercase">
            <h2 className='text-[20px] leading-[20px]'>&copy;2024 hetrajsinhraj</h2>
            <h2 className='leading-[20px]' onClick={scrollToTop} style={{cursor: 'pointer'}}>go back to top</h2>
        </div>
    </div>
  );
};

export default Footer;
