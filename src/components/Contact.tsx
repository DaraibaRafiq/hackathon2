
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { IoTime } from "react-icons/io5";

function Contact() {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="flex flex-col justify-center items-center bg-center bg-cover bg-no-repeat w-full h-80 sm:h-60"
        style={{ backgroundImage: "url('/contactframe.png')" }}
      >
        <Image src="/logo.png" alt="logo" width={77} height={77} />
        <h2 className="font-bold text-3xl sm:text-2xl">Contact</h2>

        <div className="flex flex-row justify-center items-center space-x-2 mt-2">
          <p className="text-lg text-black font-bold">Home</p>
          <FaChevronRight />
          <p className="text-lg text-black">Contact</p>
        </div>
      </div>

      {/* Get In Touch Section */}
      <div className="flex flex-col mt-12 text-center px-4">
        <h2 className="text-3xl sm:text-2xl font-bold text-[#000]">
          Get In Touch With Us
        </h2>
        <p className="text-gray-500 mt-4 text-base sm:text-sm">
          For more information about our product & services, please feel free to drop us
          <br className="hidden sm:block" /> an email. Our staff is always here to help you. Do not hesitate!
        </p>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col items-center mt-20 px-4">
        <div className="flex flex-col lg:flex-row w-full max-w-5xl space-y-10 lg:space-y-0 lg:space-x-10">
          {/* Left Side: Icons and Information */}
          <div className="flex flex-col space-y-5">
            {/* Address */}
            <div className="flex items-center space-x-3">
              <IoLocationSharp />
              <h1 className="text-xl sm:text-lg text-[#000]">Address</h1>
            </div>
            <p className="text-[#000] text-base sm:text-sm">
              236 5th SE Avenue, New<br /> York NY10000, United<br /> States
            </p>

            {/* Phone */}
            <div className="flex items-center space-x-3">
              <FaPhoneAlt />
              <h1 className="text-xl sm:text-lg text-[#000]">Phone</h1>
            </div>
            <p className="text-[#000] text-base sm:text-sm">
              Mobile: +(84) 546-6789<br />
              Hotline: +(84) 456-6789
            </p>

            {/* Working Time */}
            <div className="flex items-center space-x-3">
              <IoTime />
              <h1 className="text-xl sm:text-lg text-[#000]">Working Time</h1>
            </div>
            <p className="text-[#000] text-base sm:text-sm">
              Monday-Friday: 9:00 - 22:00<br />
              Saturday-Sunday: 9:00 - 21:00
            </p>
          </div>

          {/* Right Side: Form */}
          <div className="flex flex-col flex-1">
            <form className="space-y-6">
              <div>
                <label className="font-bold text-[#000] block mb-2">Your name</label>
                <input
                  type="text"
                  placeholder="Abc"
                  className="rounded border border-gray-300 w-full p-3"
                />
              </div>

              <div>
                <label className="font-bold text-[#000] block mb-2">Email address</label>
                <input
                  type="email"
                  placeholder="Abc@def.com"
                  className="rounded border border-gray-300 w-full p-3"
                />
              </div>

              <div>
                <label className="font-bold text-[#000] block mb-2">Subject</label>
                <input
                  type="text"
                  placeholder="This is optional"
                  className="rounded border border-gray-300 w-full p-3"
                />
              </div>

              <div>
                <label className="font-bold text-[#000] block mb-2">Message</label>
                <textarea
                  placeholder="Hi! I'd like to ask about..."
                  className="rounded border border-gray-300 w-full p-3 resize-none"
                ></textarea>
              </div>

              <div className="mt-6">
                <button className="bg-[#B88E27] hover:bg-[#f2bc35] text-[#fff] rounded w-full lg:w-48 p-4">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
