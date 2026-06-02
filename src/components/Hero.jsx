"use client";
import Image from 'next/image'; 
import summerImg from '@/assets/summer.png'; 

const Hero = () => {
  return (
    <div className="bg-white rounded-lg px-10 pb-10 pt-0 mt-0 mb-6 text-center shadow-none"> 
      <h1 className="text-5xl font-bold mt-10 mb-4 text-gray-800">Welcome to Our Store!</h1>
      <p className="text-lg text-gray-600 mb-6">Discover the best products for your summer needs.</p>
      <div className="flex justify-center pt-6 my-2">
        <Image 
          src={summerImg} 
          alt="Summer Sale Banner" 
          width={1000} 
          height={800} 
          className="w-full max-h-[400px] object-cover rounded-xl shadow-md"
          priority 
        />
      </div>

    </div>
  );
};

export default Hero;