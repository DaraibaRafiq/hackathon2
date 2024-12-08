import React from 'react'
import Image from 'next/image'

const Hero2 = () => {
  return (
    <div className='p-4'>
      <div className='flex flex-col mt-4 text-center'>
        <h2 className='font-bold text-black text-[40px] lg:text-[40px]'>Top Picks For You</h2>
        <p className='font-normal text-gray-400 mt-5 text-sm lg:text-base'>Find a bright idea to suit your taste with our great selection of suspension, floor, and table light</p>
      </div>
      <div className='flex flex-col lg:flex-row items-center lg:justify-center mt-8 space-y-8 lg:space-y-0 lg:space-x-8'>
        <div className='w-full lg:w-[287px] h-[397px] flex justify-center'>
          <Image src="/pick1.png" alt="pick1" width={200} height={200} className='mb-9 h-[270px] lg:h-[397px]'/>
        </div>
        <div className='w-full lg:w-[287px] h-[397px] flex justify-center'>
          <Image src="/pick2.png" alt="pick2" width={200} height={200} className='mb-9 lg:h-[397px]'/>
        </div>
        <div className='w-full lg:w-[287px] h-[397px] flex justify-center'>
          <Image src="/pick3.png" alt="pick3" width={200} height={200} className='mb-9 lg:h-[397px]'/>
        </div>
        <div className='w-full lg:w-[287px] h-[397px] flex justify-center'>
          <Image src="/pick4.png" alt="pick4" width={200} height={200} className='mb-9 lg:h-[397px]'/>
        </div>
      </div>
      <div className="text-center mt-8">
        <h2 className="text-xl text-black font-semibold">View More</h2>
        <div className="w-28 mx-auto bg-black font-bold">
          <hr />
        </div>
      </div>
    </div>
  )
}

export default Hero2
