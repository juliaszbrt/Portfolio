'use client'
import React from 'react'
import '../globals.css'
import Image from 'next/image'
import { motion } from "framer-motion";

const GDG = () => {
  return (
    <div className='bg-[#b9d193]'>
      <div className='pt-[3rem] flex flex-col items-center gap-[1rem] text-center'>
        <h1 className="text-[25px] font-bold mx-[1rem] tracking-[1px] text-[#42571f]">Google Developer Groups</h1>
        <h2 className="text-[20px] font-bold mt-[-15px] tracking-[1px] text-[#627b3b]">on Campus TMU</h2>
        <p className="text-[13px] mx-[2rem] tracking-[1px] text-[#708450]">Scaled the community to the largest in Canada, growing from <b>0 to 5,000+</b> in only 1 year across multiple platforms (Instagram, LinkedIn, Discord, Bevy) by creating and managing content, designing graphics, and hosting events.</p>
      </div>
      <div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{
              once: true,
          }}
          transition={{ duration: 3 }}
          className="flex flex-row justify-center">
          <div className='my-[2rem] grid grid-cols-2 gap-[20px] items-center'>
            <a target="_blank" href="https://www.instagram.com/p/C9KuZ1GOAEw/?img_index=1">
              <div className='w-[150px] h-[150px] border-[3px] border-[#708450] hover:scale-[105%] transition-all duration-500'>
                <Image src="/gdg/giveaway1.png" width={1446} height={1446}></Image>
              </div>
            </a>
            <a target="_blank" href="https://www.instagram.com/p/C9KuZ1GOAEw/?img_index=1">
              <div className='w-[150px] h-[150px] border-[3px] border-[#708450] hover:scale-[105%] transition-all duration-500'>
                <Image src="/gdg/giveaway2.png" width={1446} height={1446}></Image>
              </div>
            </a>
            <a target="_blank" href="https://www.instagram.com/p/C5OEHj2Orof/?img_index=2">
              <div className='w-[150px] h-[150px] border-[3px] border-[#708450] hover:scale-[105%] transition-all duration-500'>
                <Image src="/gdg/sandwich.png" width={1446} height={1446}></Image>
              </div>
            </a>
            <a target="_blank" href="https://www.instagram.com/p/C2c7SOjO4ir/">
            <div className='w-[150px] h-[150px] border-[3px] border-[#708450] hover:scale-[105%] transition-all duration-500'>
                <Image src="/gdg/kickoff.png" width={1446} height={1446}></Image>
              </div>
            </a>
            <a target="_blank" href="https://www.instagram.com/p/C2XfJOVukmT/?img_index=1">
              <div className='w-[150px] h-[150px] border-[3px] border-[#708450] hover:scale-[105%] transition-all duration-500'>
                <Image src="/gdg/nintendo1.png" width={1446} height={1446}></Image>
              </div>
            </a>
            <a target="_blank" href="https://www.instagram.com/p/C2XfJOVukmT/?img_index=2">
              <div className='w-[150px] h-[150px] border-[3px] border-[#708450] hover:scale-[105%] transition-all duration-500'>
                <Image src="/gdg/nintendo2.png" width={1446} height={1446}></Image>
              </div>
            </a>
            <a target="_blank" href="https://www.instagram.com/p/C9m59rvuuLd/?img_index=1">
              <div className='w-[150px] h-[150px] border-[3px] border-[#708450] hover:scale-[105%] transition-all duration-500'>
                <Image src="/gdg/wrap1.png" width={1446} height={1446}></Image>
              </div>
            </a>
            <a target="_blank" href="https://www.instagram.com/p/C9m59rvuuLd/?img_index=2">
              <div className='w-[150px] h-[150px] border-[3px] border-[#708450] hover:scale-[105%] transition-all duration-500'>
                <Image src="/gdg/wrap2.png" width={1446} height={1446}></Image>
              </div>
            </a>
            <a target="_blank" href="https://www.instagram.com/reel/DBbWT7ZJTB-/">
              <div className='w-[150px] border-[3px] border-[#708450] hover:scale-[105%] transition-all duration-500'>
                <Image src="/gdg/ghc.png" width={1446} height={1446}></Image>
              </div>
              <p className='mt-[10px] text-[15px] text-center text-[#708450] tracking-[1px]'>7k+ views</p>
            </a>
            <a target="_blank" href="https://www.instagram.com/reel/C-praOvu7gU/">
              <div className='w-[150px] border-[3px] border-[#708450] hover:scale-[105%] transition-all duration-500'>
                <Image src="/gdg/interview.png" width={1125} height={2000}></Image>
              </div>
              <p className='mt-[10px] text-[15px] text-center text-[#708450] tracking-[1px]'>10.5k+ views</p>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default GDG