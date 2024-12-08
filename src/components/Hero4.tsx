import React from 'react'
import Image from 'next/image'

const Hero4 = () => {
  return (
    <div className='w-full h-[500px] overflow-hidden'>
        <div className='flex flex-col mt-2 text-center'>
          <h2 className='font-bold text-black text-[40px]'>Our Blogs</h2>
          <p className='font-normal text-gray-400 mt-5'>Find a bright idea to suit your taste with our great selection</p>
        </div>
        <div className="flex flex-row ml-16 mt-8 gap-8 justify-center">
          {/* Card 1 */}
          <div className="flex flex-col items-center w-[300px] h-[400px] gap-4 md:w-[250px] md:h-[350px]">
            <Image src="/blog1.png" alt="blog1" width={300} height={345} className="object-cover" />
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center w-[300px] h-[400px] gap-4 md:w-[250px] md:h-[350px]">
            <Image src="/blog2.png" alt="blog2" width={300} height={300} className="object-cover" />
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center w-[300px] h-[400px] gap-4 md:w-[250px] md:h-[350px]">
            <Image src="/blog3.png" alt="blog3" width={300} height={200} className="object-cover" />
          </div>
        </div>
        <div className="text-center mt-20 flex flex-col items-center">
          <h2 className="text-black text-xl font-medium">View All Post</h2>
          <hr className="w-16 h-1 bg-gray-500 border-none mt-2" />
        </div>
    </div>
  )
}

export default Hero4
