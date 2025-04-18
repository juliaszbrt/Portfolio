'use client'
import React from 'react'
import '../globals.css'
import Image from 'next/image'
import { motion } from "framer-motion";
import Link from 'next/link';

const Traditional = () => {
	return (
		<div className="bg-[#fffcf9] h-auto min-h-screen">
			<div className='lg:flex'>
				<div className="lg:fixed lg:w-1/2 lg:mt-[3rem]">
					<div className='pt-[3rem] flex flex-col items-center gap-[1rem] text-center lg:text-left lg:items-start lg:ml-[5rem]'>
						<Link href="/#portfolio">
							<div className="mt-[-1rem] ml-[1.5rem] absolute left-0 lg:static lg:ml-0 text-[#e2c16c] tracking-[1px] font-bold hover:scale-[105%] transition-all duration-500">
								&#x2190; Previous
							</div>
						</Link>
						<h1 className="text-[28px] font-bold mx-[1rem] tracking-[1px] text-[#ae8827] md:text-[35px] lg:text-[45px] lg:mx-0">Traditional Art</h1>
						<h2 className="text-[19px] font-bold mt-[-15px] tracking-[1px] text-[#dfb752] md:text-[25px] lg:text-[35px]">The simplicity of pencil on paper.</h2>
						<p className="text-[13px] mx-[2rem] tracking-[1px] text-[#c4a558] md:text-[15px] lg:text-[20px] lg:ml-0 lg:mt-[1rem]">A quiet hobby of mine; for slow, rainy days. </p>
						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							viewport={{
								once: true,
							}}
							transition={{ duration: 3 }}>
						</motion.div>
					</div>
				</div>
				<div className='lg:w-1/2 lg:ml-auto'>
					<div className="flex flex-col justify-center items-center">
						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							viewport={{
								once: true,
							}}
							transition={{ duration: 3 }}>
							<div className='my-[2rem] grid grid-cols-2 md:grid-cols-4 gap-[20px] items-center lg:grid-cols-2 lg:ml-0 lg:my-[7rem] lg:gap-[50px]'>
								<div className='relative w-[150px] h-[190px] border-[3px] border-[#ae8827] hover:scale-[105%] transition-all duration-500 lg:w-[280px] lg:h-[360px]'>
									<Image src="/design/hoyeon.JPG" fill className="object-cover"></Image>
								</div>

								<div className='relative w-[150px] h-[190px] border-[3px] border-[#ae8827] hover:scale-[105%] transition-all duration-500 lg:w-[280px] lg:h-[360px]'>
									<Image src="/design/conan.jpg" fill className="object-cover"></Image>
								</div>

								<div className='relative w-[150px] h-[190px] border-[3px] border-[#ae8827] hover:scale-[105%] transition-all duration-500 lg:w-[280px] lg:h-[360px]'>
									<Image src="/design/cats.jpg" fill className="object-cover"></Image>
								</div>

								<div className='relative w-[150px] h-[190px] border-[3px] border-[#ae8827] hover:scale-[105%] transition-all duration-500 lg:w-[280px] lg:h-[360px]'>
									<Image src="/design/zendaya.jpg" fill className="object-cover"></Image>
								</div>

								<div className='relative w-[150px] h-[190px] border-[3px] border-[#ae8827] hover:scale-[105%] transition-all duration-500 lg:w-[280px] lg:h-[360px]'>
									<Image src="/design/portrait.jpg" fill className="object-cover"></Image>
								</div>

								<div className='relative w-[150px] h-[190px] border-[3px] border-[#ae8827] hover:scale-[105%] transition-all duration-500 lg:w-[280px] lg:h-[360px]'>
									<Image src="/design/hands.jpg" fill className="object-cover"></Image>
								</div>
							</div>
						</motion.div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Traditional