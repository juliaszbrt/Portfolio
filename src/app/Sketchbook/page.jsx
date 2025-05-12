'use client'
import React from 'react'
import '../globals.css'
import Image from 'next/image'
import { motion } from "framer-motion";
import Link from 'next/link';

const Sketchbook = () => {
	return (
		<div className="bg-[#fff8f3] h-auto min-h-screen py-[3rem] [font-family:var(--font-murecho)]">
			<div className='lg:flex'>
				<motion.div
					initial={{ opacity: 0, y: 10 }}
					whileInView={{
						opacity: 1, y: 0
					}}
					transition={{
						type: "spring",
						duration: 2,
						bounce: 0,
					}}
					viewport={{ once: true }}
					className="lg:fixed lg:w-1/2 lg:mt-[3rem]">
					<div className='flex flex-col items-center gap-[1rem] text-center lg:text-left lg:items-start lg:ml-[5rem]'>
						<Link href="/#portfolio">
							<div className="mt-[-1rem] ml-[1.5rem] absolute left-0 lg:static lg:ml-0 text-[#a4b685] tracking-[1px] font-bold hover:scale-[105%] transition-all duration-500">
								&#x2190; Previous
							</div>
						</Link>
						<h1 className="text-[2rem] mt-[1rem] font-bold mx-[1rem] tracking-[1px] text-[#4a5e2a] lg:mt-0 lg:text-[3rem] xl:text-[5rem] lg:mx-0">Sketchbook</h1>
						<h2 className="text-[20px] font-bold mt-[-15px] tracking-[1px] text-[#627b3b] lg:text-[2.2rem]">For slow, rainy days...</h2>
						<p className="text-left text-[13px] xl:text-[17px] mx-[2rem] tracking-[1px] text-[#708450] lg:ml-0 lg:mt-[1rem]">A quiet hobby of mine. Although I primarily like to work with graphite, I challenge myself with different mediums from time to time.</p>
					</div>
				</motion.div>
				<div className='lg:w-1/2 lg:ml-auto'>
				<div className="flex flex-col justify-center items-center">
						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							viewport={{
								once: true,
							}}
							transition={{ duration: 3 }}>
							<div className='my-[2rem] grid grid-cols-2 md:grid-cols-4 gap-[20px] items-center lg:grid-cols-2 lg:ml-0 lg:mt-[5rem] lg:gap-[2rem] xl:gap-[3rem] xl:max-w-[35rem]'>
								<div className='relative w-[150px] h-[190px] hover:scale-[105%] transition-all duration-500 lg:w-[12rem] lg:h-[16rem] xl:w-[15rem] xl:h-[20rem]'>
									<Image src="/design/hoyeon.JPG" fill className="object-cover"></Image>
								</div>

								<div className='relative w-[150px] h-[190px] hover:scale-[105%] transition-all duration-500 lg:w-[12rem] lg:h-[16rem] xl:w-[15rem] xl:h-[20rem]'>
									<Image src="/design/hands.jpg" fill className="object-cover"></Image>
								</div>

								<div className='relative w-[150px] h-[190px] hover:scale-[105%] transition-all duration-500 lg:w-[12rem] lg:h-[16rem] xl:w-[15rem] xl:h-[20rem]'>
									<Image src="/design/cats.jpg" fill className="object-cover"></Image>
								</div>

								<div className='relative w-[150px] h-[190px] hover:scale-[105%] transition-all duration-500 lg:w-[12rem] lg:h-[16rem] xl:w-[15rem] xl:h-[20rem]'>
									<Image src="/design/conan.jpg" fill className="object-cover"></Image>
								</div>

								<div className='relative w-[150px] h-[190px] hover:scale-[105%] transition-all duration-500 lg:w-[12rem] lg:h-[16rem] xl:w-[15rem] xl:h-[20rem]'>
									<Image src="/design/portrait.jpg" fill className="object-cover"></Image>
								</div>

								<div className='relative w-[150px] h-[190px] hover:scale-[105%] transition-all duration-500 lg:w-[12rem] lg:h-[16rem] xl:w-[15rem] xl:h-[20rem]'>
									<Image src="/design/zendaya.jpg" fill className="object-cover"></Image>
								</div>
							</div>
						</motion.div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Sketchbook