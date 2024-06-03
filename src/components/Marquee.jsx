import React, { useState } from 'react';

const Marquee = () => {
  const [details] = useState([
    { id: 1, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/732px-Apple_logo_black.svg.png?20220821121934", cmp_name: "apple"},
    { id: 2, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/732px-Apple_logo_black.svg.png?20220821121934", cmp_name: "apple"},
    { id: 3, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/732px-Apple_logo_black.svg.png?20220821121934", cmp_name: "apple"},
    { id: 4, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/732px-Apple_logo_black.svg.png?20220821121934", cmp_name: "apple"},
    { id: 5, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/732px-Apple_logo_black.svg.png?20220821121934", cmp_name: "apple"},
    { id: 6, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/732px-Apple_logo_black.svg.png?20220821121934", cmp_name: "apple"},
  ])
  return (
    <div className='w-full min-h-screen py-14'>
      <div className="w-full overflow-x-auto flex whitespace-nowrap animate-marquee">
        {details.map((elem, index)=>(
          <div key={index} className="w-[500px] overflow-hidden mr-14 rounded-lg h-[33vh] bg-[#f5f5f7] flex items-center gap-3">
          <img className='w object-cover' src={elem.image} alt="" />
          <h2 className='text-[36px] font-medium'> {elem.cmp_name}</h2>
        </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
