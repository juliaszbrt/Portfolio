'use client'
import React from 'react'
import Link from 'next/link'
import '../globals.css'
import Image from 'next/image'
import { motion } from "framer-motion";

const WiCS = () => {
	return (
		<div className="bg-[#fffcf9] h-auto min-h-screen py-[3rem]">
			<div className='lg:flex'>
				<div className="lg:fixed lg:w-1/2 lg:mt-[3rem]">
					<div className='flex flex-col items-center gap-[1rem] text-center lg:text-left lg:items-start lg:ml-[5rem]'>
						<Link href="/#portfolio">
							<div className="mt-[-1rem] ml-[1.5rem] absolute left-0 lg:static lg:ml-0 text-[#a4b685] tracking-[1px] font-bold hover:scale-[105%] transition-all duration-500">
								&#x2190; Previous
							</div>
						</Link>
						<h1 className="text-[25px] font-bold mx-[1rem] tracking-[1px] text-[#42571f] md:text-[35px] lg:text-[45px] lg:mx-0 leading-[3.5rem]">Women in Computer Science</h1>
						<h2 className="text-[20px] font-bold mt-[-15px] tracking-[1px] text-[#627b3b] md:text-[25px] lg:text-[35px]">Photographer</h2>
						<p className="text-[13px] mx-[2rem] tracking-[1px] text-[#708450] md:text-[20px] lg:ml-0 lg:mt-[1rem]">Interacted with other women in my program by attending WiCS events, capturing memories for the marketing team to use on various social media platforms.</p>
						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							viewport={{
								once: true,
							}}
							transition={{ duration: 3 }}>
							<div className="flex gap-[1.5rem] mt-[0.8rem] lg:mt-[1.5rem]">
								<a target="_blank" href="https://www.instagram.com/tmu_wics/">
									<div className="w-[30px] lg:w-[47px] hover:scale-[105%] transition-all duration-500">
										<Image src="/community/ig.png" width={2048} height={2048}></Image>
									</div>
								</a>
								<a target="_blank" href="http://tmuwics.ca/?i=1">
									<div className="w-[30px] lg:w-[47px] hover:scale-[105%] transition-all duration-500">
										<Image src="/community/web.png" width={2048} height={2048}></Image>
									</div>
								</a>
								<a target="_blank" href="https://www.linkedin.com/company/tmuwics/">
									<div className="w-[29px] lg:w-[45px] hover:scale-[105%] transition-all duration-500">
										<Image src="/community/linkedin.png" width={2048} height={2048}></Image>
									</div>
								</a>
							</div>
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
							<div className='mt-[2rem] md:mt-[3rem] flex flex-col justify-center gap-[2rem]'>
									<div className='w-[20rem] border-[3px] border-[#708450] hover:scale-[105%] transition-all duration-500 md:w-[32rem]'>
										<Image src="/community/team.jpg" width={5330} height={3553}></Image>
									</div>
									<div className='w-[20rem] border-[3px] border-[#708450] hover:scale-[105%] transition-all duration-500 md:w-[32rem]'>
										<Image src="/community/datasci.jpg" width={5330} height={3553}></Image>
									</div>
									<div className='w-[20rem] border-[3px] border-[#708450] hover:scale-[105%] transition-all duration-500 md:w-[32rem]'>
										<Image src="/community/crowd.JPG" width={5330} height={3553}></Image>
									</div>
							</div>
						</motion.div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default WiCS