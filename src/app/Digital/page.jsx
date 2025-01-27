'use client'
import React from 'react'
import '../globals.css'
import Image from 'next/image'
import { motion } from "framer-motion";
import Link from 'next/link';

const Digital = () => {
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
						<h1 className="text-[28px] font-bold mx-[1rem] tracking-[1px] text-[#ae8827] md:text-[35px] lg:text-[45px] lg:mx-0">Digital Design</h1>
						<h2 className="text-[19px] font-bold mt-[-15px] tracking-[1px] text-[#dfb752] md:text-[25px] lg:text-[35px]">The art of balanced detail.</h2>
						{/* <p className="text-[13px] mx-[2rem] tracking-[1px] text-[#c4a558] md:text-[15px] lg:text-[20px] lg:ml-0 lg:mt-[1rem]">Scaled the community to the largest in Canada, growing from <b>0 to 5,000+</b> in only 1 year across multiple platforms (Instagram, LinkedIn, Discord, Bevy) as President of a team 40+ and hosting engaging networking events, technical workshops, and developer community initiatives.</p> */}
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
								<a target="_blank" href="https://www.instagram.com/p/C9KuZ1GOAEw/?img_index=1">
									<div className='w-[150px] h-[150px] border-[3px] border-[#ae8827] hover:scale-[105%] transition-all duration-500 lg:w-[230px] lg:h-[230px] xl:w-[280px] xl:h-[280px]'>
										<Image src="/design/giveaway1.png" width={1446} height={1446}></Image>
									</div>
								</a>
								<a target="_blank" href="https://www.instagram.com/p/C9KuZ1GOAEw/?img_index=1">
									<div className='w-[150px] h-[150px] border-[3px] border-[#ae8827] hover:scale-[105%] transition-all duration-500 lg:w-[230px] lg:h-[230px] xl:w-[280px] xl:h-[280px]'>
										<Image src="/design/giveaway2.png" width={1446} height={1446}></Image>
									</div>
								</a>
								<a target="_blank" href="https://www.instagram.com/p/C5OEHj2Orof/?img_index=2">
									<div className='w-[150px] h-[150px] border-[3px] border-[#ae8827] hover:scale-[105%] transition-all duration-500 lg:w-[230px] lg:h-[230px] xl:w-[280px] xl:h-[280px]'>
										<Image src="/design/sandwich.png" width={1446} height={1446}></Image>
									</div>
								</a>
								<a target="_blank" href="https://www.instagram.com/p/C2c7SOjO4ir/">
									<div className='w-[150px] h-[150px] border-[3px] border-[#ae8827] hover:scale-[105%] transition-all duration-500 lg:w-[230px] lg:h-[230px] xl:w-[280px] xl:h-[280px]'>
										<Image src="/design/kickoff.png" width={1446} height={1446}></Image>
									</div>
								</a>
								<a target="_blank" href="https://www.instagram.com/p/C2XfJOVukmT/?img_index=1">
									<div className='w-[150px] h-[150px] border-[3px] border-[#ae8827] hover:scale-[105%] transition-all duration-500 lg:w-[230px] lg:h-[230px] xl:w-[280px] xl:h-[280px]'>
										<Image src="/design/nintendo1.png" width={1446} height={1446}></Image>
									</div>
								</a>
								<a target="_blank" href="https://www.instagram.com/p/C2XfJOVukmT/?img_index=2">
									<div className='w-[150px] h-[150px] border-[3px] border-[#ae8827] hover:scale-[105%] transition-all duration-500 lg:w-[230px] lg:h-[230px] xl:w-[280px] xl:h-[280px]'>
										<Image src="/design/nintendo2.png" width={1446} height={1446}></Image>
									</div>
								</a>
								<a target="_blank" href="https://www.instagram.com/p/C9m59rvuuLd/?img_index=1">
									<div className='w-[150px] h-[150px] border-[3px] border-[#ae8827] hover:scale-[105%] transition-all duration-500 lg:w-[230px] lg:h-[230px] xl:w-[280px] xl:h-[280px]'>
										<Image src="/design/wrap1.png" width={1446} height={1446}></Image>
									</div>
								</a>
								<a target="_blank" href="https://www.instagram.com/p/C9m59rvuuLd/?img_index=2">
									<div className='w-[150px] h-[150px] border-[3px] border-[#ae8827] hover:scale-[105%] transition-all duration-500 lg:w-[230px] lg:h-[230px] xl:w-[280px] xl:h-[280px]'>
										<Image src="/design/wrap2.png" width={1446} height={1446}></Image>
									</div>
								</a>
							</div>
							{/* <div className='my-[2rem] flex justify-center'>
								<div className='grid grid-cols-2 md:grid-cols-2 gap-[20px] items-center lg:gap-[25px] xl:gap-[50px]'>
									<a target="_blank" href="https://www.instagram.com/reel/DBbWT7ZJTB-/">
										<div className='w-[150px] border-[3px] border-[#708450] hover:scale-[105%] transition-all duration-500 lg:w-[230px] xl:w-[280px]'>
											<Image src="/gdg/ghc.png" width={1446} height={1446}></Image>
										</div>
										<p className='mt-[10px] text-[15px] text-center text-[#708450] tracking-[1px]'>7k+ views</p>
									</a>
									<a target="_blank" href="https://www.instagram.com/reel/C-praOvu7gU/">
										<div className='w-[150px] border-[3px] border-[#708450] hover:scale-[105%] transition-all duration-500 lg:w-[230px] xl:w-[280px]'>
											<Image src="/gdg/interview.png" width={1125} height={2000}></Image>
										</div>
										<p className='mt-[10px] text-[15px] text-center text-[#708450] tracking-[1px]'>10.5k+ views</p>
									</a>
								</div>
							</div> */}
						</motion.div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Digital