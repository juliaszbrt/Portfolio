'use client'
import Link from "next/link";
import { Murecho } from 'next/font/google'
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

const murecho = Murecho({ subsets: ['latin'] })

const Home = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen((prev) => !prev);
	}

	useEffect(() => {
		if (menuOpen) {
			document.body.classList.add("overflow-hidden");
		} else {
			document.body.classList.remove("overflow-hidden");
		}

		return () => document.body.classList.remove("overflow-hidden");
	}, [menuOpen]);

	const handleMenuItemClick = () => {
		setMenuOpen(false);
	};

	return (
		<div className="h-screen bg-[#FFECDD] relative overflow-hidden">
			<div className="h-screen flex flex-col justify-center items-center narrow:flex-row px-[8rem] py-0 macbook:py-[2rem]">
				<div className="narrow:w-1/4 flex items-center justify-center">
					<motion.div
						initial={{
							opacity:0,
						}}
						animate={{
							opacity: 1,
							
						}}
						transition={{
							duration:2
						}}						
						className="flex narrow:flex-col narrow:leading-[7rem] regular:leading-[9rem]">
						<p className="text-[#FFDBBF] text-center text-[4rem] md:text-[9rem] narrow:text-[9rem] regular:text-[11rem] macbook:text-[12rem] font-black [font-family:var(--font-oshigo)] narrow:rotate-[-22deg] relative narrow:left-[-40px] narrow:bottom-[-70px]">ジ</p>
						<p className="text-[#FFDBBF] text-center text-[4rem] md:text-[9rem] narrow:text-[7rem] regular:text-[8rem] macbook:text-[8rem] font-black [font-family:var(--font-oshigo)] narrow:rotate-[13deg] relative narrow:left-[60px] narrow:bottom-[-40px]">ュ</p>
						<p className="text-[#FFDBBF] text-center text-[4rem] md:text-[9rem] narrow:text-[9rem] regular:text-[9rem] macbook:text-[10rem] font-black [font-family:var(--font-oshigo)] relative narrow:left-[-75px] narrow:bottom-[-10px]">リ</p>
						<p className="text-[#FFDBBF] text-center text-[4rem] md:text-[9rem] narrow:text-[8rem] regular:text-[9rem] macbook:text-[9rem] font-black [font-family:var(--font-oshigo)] narrow:rotate-[13deg] relative narrow:left-[40px] narrow:bottom-[-10px]">ア</p>
						<p className="text-[#FFDBBF] text-center text-[4rem] md:text-[9rem] narrow:text-[8rem] regular:text-[9rem] macbook:text-[10rem] font-black [font-family:var(--font-oshigo)] narrow:rotate-[-35deg] relative narrow:left-[-65px] narrow:top-[-40px]">!</p>
					</motion.div>
				</div>
				<div className="narrow:w-3/4 flex items-center justify-center">
					<motion.div
						initial={{
							opacity:0,
						}}
						animate={{
							opacity: 1,
							
						}}
						transition={{
							duration:2
						}}
						className="flex flex-col items-center justify-center w-full narrow:pl-[5rem]">
						<h1 className="text-[#F4B280] text-center text-[4.5rem] md:text-[10rem] narrow:text-[9rem] regular:text-[12rem] macbook:text-[14rem] tracking-[5px] lg:tracking-[11px] font-bold [font-family:var(--font-oshigo)] narrow:leading-[8rem] regular:leading-[11rem] macbook:leading-[15rem]">JULIA</h1>
						<h1 className="text-[#FFC699] text-center text-[2.8rem] md:text-[6.5rem] narrow:text-[5.5rem] regular:text-[7.5rem] macbook:text-[8.5rem] tracking-[5px] lg:tracking-[11px] font-bold [font-family:var(--font-oshigo)]">SZUBERT</h1>
						<div className="text-[#F0BD37] hidden narrow:flex narrow:justify-center narrow:gap-[3rem] narrow:pt-[30px] regular:gap-[5rem] macbook:gap-[6.5rem] font-bold tracking-[5px] narrow:text-[1.5rem] regular:text-[2.2rem] macbook:text-[2.5rem]">
							<a href='#portfolio' className='hover:scale-[110%] transition-all duration-500'><h3>Projects</h3></a>
							<a href='#about' className='hover:scale-[110%] transition-all duration-500'><h3>About</h3></a>
							<a href='#experience' className='hover:scale-[110%] transition-all duration-500'><h3>Experience</h3></a>
						</div>
					</motion.div>
				</div>
			</div>
			{/* Hamburger menu */}
			<div
				onClick={toggleMenu}
				className="narrow:hidden absolute top-0 w-full flex justify-end p-[2rem] pr-[2.3rem] text-[40px] md:text-[60px] md:pr-[3rem] text-[#f8c137]">
				&#x2630;
			</div>
			{/* Slide out menu */}
			<div
				className={`absolute top-0 ${menuOpen ? "left-0" : "left-full"
					} narrow:hidden w-full h-full z-20 bg-[#486c34] transition-all duration-500`}>
				<div className="flex flex-col justify-center items-center text-center h-full gap-[2rem] text-[25px] tracking-[3px] text-[#FFECDD]">
					<a href="#portfolio" onClick={handleMenuItemClick}>
						<div className="hover:scale-110 transition-all duration-500">Projects</div>
					</a>
					<a href="#about" onClick={handleMenuItemClick}>
						<div className="hover:scale-110 transition-all duration-500">About</div>
					</a>
					<a href="#experience" onClick={handleMenuItemClick}>
						<div className="hover:scale-110 transition-all duration-500">Experience</div>
					</a>
				</div>
				<div className="absolute bottom-0 left-0 w-full flex justify-center gap-[2rem] pb-[2.5rem]">
					<a target="_blank" href="https://www.linkedin.com/in/juliaszubert/"><Image width={2048} height={2048} src='/linkedin.png' className="w-[3rem] h-[3rem] lg:w-[5rem] lg:h-[5rem] hover:scale-[110%] transition-all duration-500 2xl:w-[6rem] 2xl:h-[6rem]" /></a>
					<a target="_blank" href="https://github.com/juliaszbrt"><Image width={2048} height={2048} src='/github.png' className="w-[3rem] h-[3rem] lg:w-[5rem] lg:h-[5rem] hover:scale-[110%] transition-all duration-500 2xl:w-[6rem] 2xl:h-[6rem]" /></a>
					<a target="_blank" href="https://www.instagram.com/juliaszbrt/"><Image width={2048} height={2048} src='/instagram.png' className="w-[3rem] h-[3rem] lg:w-[5rem] lg:h-[5rem] hover:scale-[110%] transition-all duration-500 2xl:w-[6rem] 2xl:h-[6rem]" /></a>
				</div>
				<div
					onClick={toggleMenu}
					className="absolute top-0 w-full flex justify-end p-[2rem] pr-[2.3rem] text-[30px] text-[#FFECDD]">
					&#x2715;
				</div>
			</div>

		</div >
	)
}

export default Home