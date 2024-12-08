import React from 'react';

const Hero5 = () => {
  return (
    <div className="w-[full] h-[450px]">
      <div
        className="flex flex-col mt-16 text-center bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero5.png')" }}
      >
        
        <div className="text-center py-8">
          <h2 className="font-bold text-black text-[40px]">Our Instagram</h2>
          <p className="font-normal text-gray-400 mt-5">Follow our store on Instagram</p>
          <button
            className="bg-gray-400 text-black rounded mt-4 px-6 py-3 hover:bg-gray-500 transition duration-300"
            aria-label="Follow us on Instagram"
          >
            Follow Us
          </button>
        </div>

      </div>
    </div>
  );
};

export default Hero5;
