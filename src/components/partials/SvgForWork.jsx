// src/components/SvgBorder.js
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const SvgBorder = () => {
  const svgRef = useRef(null);
  const pathRef = useRef(null);

  useEffect(() => {
    const svgElement = svgRef.current;
    const pathElement = pathRef.current;

    const handleMouseMove = (event) => {
      const rect = svgElement.getBoundingClientRect();
      const offsetX = event.clientX - rect.left;
      const offsetY = event.clientY - rect.top;

      const path = `M 10 30 Q ${offsetX} ${offsetY} 1200 30`; // Updated Y-coordinates

      gsap.to(pathElement, {
        attr: { d: path },
        duration: 0.2,
        ease: 'Power3.out',
      });
    };

    const handleMouseLeave = () => {
      const finalPath = 'M 10 30 Q 600 30 1200 30'; // Updated Y-coordinates

      gsap.to(pathElement, {
        attr: { d: finalPath },
        duration: 1.5,
        ease: 'elastic.out(3, 0.1)',
      });
    };

    svgElement.addEventListener('mousemove', handleMouseMove);
    svgElement.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      svgElement.removeEventListener('mousemove', handleMouseMove);
      svgElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <svg ref={svgRef} className='w-[1400px] h-[60px] lg:h-[60px]' xmlns="http://www.w3.org/2000/svg">
    <path ref={pathRef} d="M 10 30 Q 600 30 1200 30" stroke="#9b9b9e" fill="transparent" />
  </svg>
  );
};

export default SvgBorder;
