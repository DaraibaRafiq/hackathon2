import React from 'react'
import Image from 'next/image'

const Hero1 = () => {
  return (
    <div className='w-full h-[600px] overflow-hidden'>
        <div className='flex flex-col md:flex-row justify-center items-center gap-10 mt-28 ml-[20px] mr-10 px-4'>
            <div className="w-full md:w-auto">
                <Image src="/ban1.png" alt="ban1" width={400} height={400} />
            </div>
            <div className="w-full md:w-auto">
                <Image src="/ban2.png" alt="ban2" width={400} height={400} />
            </div>
        </div>
    </div>
  )
}

export default Hero1

