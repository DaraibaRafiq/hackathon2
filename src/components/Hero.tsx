import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center mx-auto h-[500px] bg-[#FBEBBF] p-6 gap-8  overflow-hidden'>
        <div className='text-center md:text-left mt-16'>
          <h1 className='font-bold text-2xl md:text-4xl'>Rocket Single</h1>
          <h1 className='font-bold text-2xl md:text-4xl'>Seater</h1>
          <button className='h-12 bg-[#FBEBB5] text-lg mt-4 text-black font-normal underline hover:opacity-80 transition duration-200'>
            Shop Now
          </button>
        </div>
        <div className='mt-8 md:mt-0'>
          <Image
            src="/sofa1.png"
            alt="Stylish rocket single seater sofa"
            width={500}
            height={600}
            priority
            className="rounded-lg"
          />
        </div>
    </div>
  );
}

export default Hero;
