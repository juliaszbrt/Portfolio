'use client'
import React from 'react'
import Link from 'next/link'
import '../globals.css'
import Image from 'next/image'
import { motion } from "framer-motion";

const GDG = () => {
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
					<div className='flex flex-col items-center gap-[0.5rem] xl:gap-[1rem] text-center lg:text-left lg:items-start lg:ml-[5rem]'>
						<Link href="/#portfolio">
							<div className="mt-[-1rem] ml-[1.5rem] absolute left-0 lg:static lg:ml-0 text-[#a4b685] tracking-[1px] font-bold hover:scale-[105%] transition-all duration-500">
								&#x2190; Previous
							</div>
						</Link>
						<h1 className="text-[1.5rem] font-bold mx-[1rem] tracking-[1px] text-[#4a5e2a] lg:text-[1.7rem] xl:text-[2.8rem] lg:mx-0 leading-[4rem] xl:leading-[5rem]">Google Developer Groups</h1>
						<h2 className="text-[1.2rem] font-bold tracking-[1px] text-[#627b3b] mt-[-1rem] lg:text-[1.4rem] xl:text-[2.2rem]">on Campus TMU</h2>
						<p className="text-left text-[13px] xl:text-[17px] mx-[2rem] tracking-[1px] text-[#708450] lg:ml-0 lg:mt-[1rem] xl:leading-[2rem]">
							Scaled TMU's developer community to the <b>largest in Canada</b>, growing from <b>0 to 5,000+</b> in only 2 years across
							multiple platforms (Instagram, LinkedIn, Discord, Bevy) by leading fresh initiatives, producing strategic
							marketing content, and managing a team of 40+ as <b>President & Founder</b>. I have hosted engaging networking
							events and technical workshops while simultaneously strengthening our social media presence through impactful
							graphics and video content.
						</p>
						<p className="text-left text-[13px] xl:text-[17px] mx-[2rem] tracking-[1px] text-[#708450] lg:ml-0 lg:mt-[1rem]">
							<b>2023 - 2025</b>: Founder & President</p>
						<div>
							<div className="flex gap-[1rem] mt-[0.8rem] lg:mt-[1.5rem]">
								<a target="_blank" href="https://www.instagram.com/gdgtmu/">
									<div className="w-[30px] lg:w-[45px] xl:w-[50px] hover:scale-[105%] transition-all duration-500">
										<Image src="/insta.svg" width={2048} height={2048}></Image>
									</div>
								</a>
								<a target="_blank" href="https://gdgtmu.org/">
									<div className="w-[30px] lg:w-[45px] xl:w-[50px] hover:scale-[105%] transition-all duration-500">
										<Image src="/globe.svg" width={2048} height={2048}></Image>
									</div>
								</a>
							</div>
						</div>
					</div>
				</motion.div>
				<div className='lg:w-1/2 lg:ml-auto'>
					<div className="flex flex-col justify-center items-center">
						<div>
							<div className='mt-[2rem] md:mt-[3rem] flex flex-col justify-center gap-[2rem]'>
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
									<div className='flex justify-center w-[20rem] border-[3px] border-[#4A5E2A] hover:scale-[105%] transition-all duration-500 lg:w-[25rem] xl:w-[32rem]'>
										<Image src="/community/presidents.jpg" width={5330} height={3553}></Image>
									</div>
									<p className="pt-[10px] text-[#708450] font-light text-[12px] lg:text-[16px] xl:text-[18px] tracking-[1px]">
										Presidents pose for a photo
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
									<div className='mt-[2rem] grid grid-cols-2 md:grid-cols-4 gap-[20px] justify-center items-center lg:grid-cols-2 lg:gap-[1rem] xl:gap-[1.8rem] lg:max-w-[25rem] xl:max-w-[35rem]'>
										<a target="_blank" href="https://www.instagram.com/p/C9KuZ1GOAEw/?img_index=1">
											<div className='w-[150px] h-[150px] border-[3px] border-[#4A5E2A] hover:scale-[105%] transition-all duration-500 lg:w-[12rem] lg:h-[12rem] xl:w-[15rem] xl:h-[15rem] justify-self-center'>
												<Image src="/design/giveaway1.png" width={1446} height={1446}></Image>
											</div>
										</a>
										<a target="_blank" href="https://www.instagram.com/p/C9KuZ1GOAEw/?img_index=1">
											<div className='w-[150px] h-[150px] border-[3px] border-[#4A5E2A] hover:scale-[105%] transition-all duration-500 lg:w-[12rem] lg:h-[12rem] xl:w-[15rem] xl:h-[15rem] justify-self-center'>
												<Image src="/design/giveaway2.png" width={1446} height={1446}></Image>
											</div>
										</a>
										<a target="_blank" href="https://www.instagram.com/p/C5OEHj2Orof/?img_index=2">
											<div className='w-[150px] h-[150px] border-[3px] border-[#4A5E2A] hover:scale-[105%] transition-all duration-500 lg:w-[12rem] lg:h-[12rem] xl:w-[15rem] xl:h-[15rem] justify-self-center'>
												<Image src="/design/sandwich.png" width={1446} height={1446}></Image>
											</div>
										</a>
										<a target="_blank" href="https://www.instagram.com/p/C2c7SOjO4ir/">
											<div className='w-[150px] h-[150px] border-[3px] border-[#4A5E2A] hover:scale-[105%] transition-all duration-500 lg:w-[12rem] lg:h-[12rem] xl:w-[15rem] xl:h-[15rem] justify-self-center'>
												<Image src="/design/kickoff.png" width={1446} height={1446}></Image>
											</div>
										</a>
									</div>
									<p className="pt-[10px] text-[#708450] text-right font-light text-[12px] lg:text-[16px] xl:text-[18px] tracking-[1px] lg:max-w-[25rem] xl:max-w-[35rem]">
										Instagram graphics created for various <br/> initiatives & events
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
									<div className='mt-[2rem] w-[20rem] border-[3px] border-[#4A5E2A] hover:scale-[105%] transition-all duration-500 lg:w-[25rem] xl:w-[32rem]'>
										<Image src="/community/team.jpg" width={5330} height={3553}></Image>
									</div>
									<p className="pt-[10px] text-[#708450] font-light text-[12px] lg:text-[16px] xl:text-[18px] tracking-[1px]">
										Networking Conference, 250 attendees 
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
									<div className='mt-[2rem] grid grid-cols-2 md:grid-cols-4 gap-[20px] justify-center items-center lg:grid-cols-2 lg:gap-[1rem] xl:gap-[1.8rem] lg:max-w-[25rem] xl:max-w-[35rem]'>
										<a target="_blank" href="https://www.instagram.com/p/C2XfJOVukmT/?img_index=1">
											<div className='w-[150px] h-[150px] border-[3px] border-[#4A5E2A] hover:scale-[105%] transition-all duration-500 lg:w-[12rem] lg:h-[12rem] xl:w-[15rem] xl:h-[15rem] justify-self-center'>
												<Image src="/design/nintendo1.png" width={1446} height={1446}></Image>
											</div>
										</a>
										<a target="_blank" href="https://www.instagram.com/p/C2XfJOVukmT/?img_index=2">
											<div className='w-[150px] h-[150px] border-[3px] border-[#4A5E2A] hover:scale-[105%] transition-all duration-500 lg:w-[12rem] lg:h-[12rem] xl:w-[15rem] xl:h-[15rem] justify-self-center'>
												<Image src="/design/nintendo2.png" width={1446} height={1446}></Image>
											</div>
										</a>
										<a target="_blank" href="https://www.instagram.com/p/C9m59rvuuLd/?img_index=1">
											<div className='w-[150px] h-[150px] border-[3px] border-[#4A5E2A] hover:scale-[105%] transition-all duration-500 lg:w-[12rem] lg:h-[12rem] xl:w-[15rem] xl:h-[15rem] justify-self-center'>
												<Image src="/design/wrap1.png" width={1446} height={1446}></Image>
											</div>
										</a>
										<a target="_blank" href="https://www.instagram.com/p/C9m59rvuuLd/?img_index=2">
											<div className='w-[150px] h-[150px] border-[3px] border-[#4A5E2A] hover:scale-[105%] transition-all duration-500 lg:w-[12rem] lg:h-[12rem] xl:w-[15rem] xl:h-[15rem] justify-self-center'>
												<Image src="/design/wrap2.png" width={1446} height={1446}></Image>
											</div>
										</a>
									</div>
									<p className="pt-[10px] text-[#708450] text-right font-light text-[12px] lg:text-[16px] xl:text-[18px] tracking-[1px] lg:max-w-[25rem] xl:max-w-[35rem]">
										More graphics!
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
									<div className='mt-[2rem] w-[20rem] border-[3px] border-[#4A5E2A] hover:scale-[105%] transition-all duration-500 lg:w-[25rem] xl:w-[32rem]'>
										<Image src="/community/crowd.JPG" width={5330} height={3553}></Image>
									</div>
									<p className="pt-[10px] text-[#708450] font-light text-[12px] lg:text-[16px] xl:text-[18px] tracking-[1px]">
										Landing a Job in Big Tech, 200 attendees
									</p>
								</motion.div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default GDG