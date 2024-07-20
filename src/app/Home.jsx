'use client'
import React from 'react';
import Link from "next/link";
import dynamic from 'next/dynamic';
import { Murecho } from 'next/font/google';
import "./app.js";

const murecho = Murecho({ subsets: ['latin'] });

// Dynamically import MotionComponent with SSR disabled
const Animation = dynamic(() => import('@/components/Animation'), { ssr: false });

const Home = () => {
  const text1 = "ジュリア";
  const text2 = "Julia Szubert";

  const text1Styles = `text-[#ffdf8f] text-center lg:text-left mt-[-2rem] text-[5rem] md:text-[11rem] 2xl:text-[16rem] font-black ${murecho.className}`;
  const text2Styles = "text-[#f8c137] text-center lg:text-left mt-[-0.5rem] lg:mt-[-2rem] text-[2rem] md:text-[5rem] 2xl:text-[7rem] tracking-[5px] lg:tracking-[11px] font-bold";

  return (
    <div className="h-screen bg-[#FFECDD]">
      <div className="flex">
        <div className="h-screen bg-[#FFDDC2] lg:flex lg:basis-1/3">
          <Link href="./contact">
            <button className="p-[3rem] absolute top-0 right-0 text-[20px] tracking-[2.5px] text-[#3C1D06] md:text-[30px]">
              Contact
            </button>
          </Link>
        </div>
        <div className="h-screen bg-[#FFECDD] lg:flex lg:basis-2/3">
          <div className="absolute lg:ml-[2.5rem] whitespace-nowrap top-1/2 transform -translate-y-1/2 left-1/2 -translate-x-1/2 lg:left-[62%]">
            <Animation 
              text1={text1} 
              text2={text2} 
              text1Styles={text1Styles} 
              text2Styles={text2Styles} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
