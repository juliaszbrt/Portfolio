'use client'
import React from 'react'
import Link from 'next/link'
import '../globals.css'
import Image from 'next/image'
import { motion } from "framer-motion";

const HappyHouseplant = () => {
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
						<h1 className="text-[2rem] mt-[1rem] font-bold mx-[1rem] tracking-[1px] text-[#4a5e2a] lg:mt-0 lg:text-[3rem] xl:text-[5rem] xl:leading-[6rem] lg:mx-0">Happy Houseplant</h1>
						<h2 className="text-[20px] font-bold mt-[-15px] tracking-[1px] text-[#627b3b] lg:text-[2.2rem]">Aug 2023</h2>
						<p className="text-left text-[13px] xl:text-[17px] mx-[2rem] tracking-[1px] text-[#708450] lg:ml-0 lg:mt-[1rem]">More details coming soon. For now, check out the actual site below:</p>
						{/* <p className="text-[13px] mx-[2rem] tracking-[1px] text-[#708450] md:text-[20px] lg:ml-0 lg:mt-[1rem]">Check out my <b>Figma</b> below; this is where I do all of my planning and ideating:</p> */}
						<div>
							<div className="flex gap-[1rem] mt-[0.8rem] lg:mt-[1.5rem]">
								<a target="_blank" href="https://happy-houseplant.vercel.app/">
									<div className="w-[30px] lg:w-[50px] hover:scale-[105%] transition-all duration-500">
										<Image src="/globe.svg" width={2048} height={2048}></Image>
									</div>
								</a>
								<a target="_blank" href="https://www.figma.com/design/6MJjYUNDGvJH7DLg46Eenb/Houseplant?t=XF3em4eyWYjJDxwH-1">
									<div className="w-[35px] lg:w-[60px] hover:scale-[105%] transition-all duration-500">
										<Image src="/figma.svg" width={2048} height={2048}></Image>
									</div>
								</a>
							</div>
						</div>
					</div>
				</motion.div>
				<div className='lg:w-1/2 lg:ml-auto'>
					{/* <div className="flex flex-col justify-center items-center">
						<div>
							<div className='mt-[2rem] md:mt-[3rem] flex flex-col justify-center items-center gap-[2rem]'>
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
									viewport={{ once: true }}>
									<div className="flex gap-[1rem] justify-center items-center max-w-[35rem]">
										<div className='w-[20rem] hover:scale-[105%] transition-all duration-500 md:w-[18rem]'>
											<Image src="/portfolio/letters.svg" width={5330} height={3553}></Image>
										</div>
										<div className='w-[20rem] hover:scale-[105%] transition-all duration-500 md:w-[18rem]'>
											<Image src="/portfolio/palette.svg" width={5330} height={3553}></Image>
										</div>
									</div>
									<p className="pr-[25px] text-[#708450] font-light text-[12px] text-right lg:text-[18px] tracking-[1px]">
										"Julia", in Japanese <i>katakana</i> letters
									</p>
								</motion.div>
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
									viewport={{ once: true }}>
									<div className='hover:scale-[105%] transition-all duration-500 max-w-[35rem]'>
										<Image src="/portfolio/projects.svg" width={5330} height={3553}></Image>
									</div>
									<p className="pr-[25px] text-[#708450] font-light mt-[10px] ml-[25px] text-[12px] lg:text-[18px] tracking-[1px]">
										Filter my projects by category tags!
									</p>
								</motion.div>
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
									className="w-[35rem]">
									<p className="text-[#4a5e2a] pr-[25px] text-right font-extrabold mt-[10px] ml-[25px] text-[3rem] tracking-[1px] [font-family:var(--font-murecho)]">Here are some fonts</p>
									<p className="text-[#708450] pr-[25px] text-right font-light mt-[10px] ml-[25px] text-[1.5rem] tracking-[1px] [font-family:var(--font-domine)]">that are used for this project.</p>
								</motion.div>
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
									className="w-[35rem]">
									<div className="flex gap-[4rem] justify-left items-center max-w-[35rem]">
										<div className='w-[10rem] hover:scale-[105%] transition-all duration-500'>
											<Image src="/portfolio/icon.svg" width={5330} height={3553}></Image>
										</div>
										<div className='mt-[-4.5rem] ml-[-5rem] w-[10rem] hover:scale-[105%] transition-all duration-500'>
											<Image src="/cursor.png" width={5330} height={3553}></Image>
										</div>
									</div>
									<p className="pl-[25px] pt-[1rem] text-[#708450] font-light text-[12px] lg:text-[18px] tracking-[1px]">
										Custom assets that can be found<br/> throughout my site :)
									</p>
								</motion.div>
							</div>
						</div>
					</div> */}
				</div>
			</div>
		</div>
	)
}

export default HappyHouseplant