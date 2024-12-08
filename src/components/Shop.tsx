
import Image from "next/image";

function Shop() {
  return (
    <div className="max-w-screen overflow-x-hidden px-4">
      {/* Top Banner */}
      <Image
        src="/shopframe.png"
        alt="shopframe"
        width={1440}
        height={316}
        className="w-full object-cover"
      />

      {/* Product Grid */}
      <div className="flex flex-col lg:flex-row items-center lg:justify-center mt-8 space-y-8 lg:space-y-0 lg:space-x-8">
        {/* Product 1 */}
        <div className="w-full lg:w-[287px] flex justify-center">
          <Image
            src="/pick1.png"
            alt="pick1"
            width={200}
            height={200}
            className="mb-9 h-auto object-contain"
          />
        </div>

        {/* Product 2 */}
        <div className="w-full lg:w-[287px] flex justify-center">
          <Image
            src="/pick2.png"
            alt="pick2"
            width={200}
            height={200}
            className="mb-9 h-auto object-contain"
          />
        </div>

        {/* Product 3 */}
        <div className="w-full lg:w-[287px] flex justify-center">
          <Image
            src="/pick3.png"
            alt="pick3"
            width={200}
            height={200}
            className="mb-9 h-auto object-contain"
          />
        </div>

        {/* Product 4 */}
        <div className="w-full lg:w-[287px] flex justify-center">
          <Image
            src="/pick4.png"
            alt="pick4"
            width={200}
            height={200}
            className="mb-9 h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Shop;
