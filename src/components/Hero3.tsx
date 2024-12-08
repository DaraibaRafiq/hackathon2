import React from 'react'
import Image from 'next/image'

const Hero3 = () => {
  return (
    <div className='w-full h-auto overflow-hidden'>
        <Image src="/hero3.png" alt="hero" width={1000} height={1000} className='ml-10 md:ml-44' />
    </div>
  )
}

export default Hero3
