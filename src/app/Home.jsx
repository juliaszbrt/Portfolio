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
			<div className="h-screen flex justify-center items-center">
				<div className="hidden text-right lg:flex flex-col gap-[2rem] text-[1.5rem] pr-[5rem]">
					<a href="#about" className="bg-[#ffd5b4] w-[6rem] h-[6rem] rounded-[100%] hover:scale-[110%] transition-all duration-500">
						<Image width={2048} height={2048} src='/about.png'></Image>
					</a>
					<a href="#experience" className="bg-[#ffd5b4] w-[6rem] h-[6rem] rounded-[100%] hover:scale-[110%] transition-all duration-500">
						<Image width={2048} height={2048} src='/experience.png'></Image>
					</a>
					<a href="#portfolio" className="bg-[#ffd5b4] w-[6rem] h-[6rem] rounded-[100%] hover:scale-[110%] transition-all duration-500">
						<Image width={2048} height={2048} src='/projects.png'></Image>
					</a>
				</div>
				<div className="lg:border-l-[0.7rem] lg:pl-[5rem] lg:py-[2rem] lg:border-[#829c75] lg:border-dashed transition-all duration-500">
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{
						once: true,
					}}
					transition={{ duration: 1 }}>
					<h1 className={`text-[#ffd5b4] text-center mt-[-2rem] text-[5rem] md:text-[12rem] lg:text-left 2xl:text-[16rem] font-black ${murecho.className}`}>ジュリア</h1>
					<h2 className="text-[#f19f60] text-center mt-[-0.5rem] text-[2rem] md:text-[5rem] lg:text-left lg:pl-[15px] 2xl:text-[7rem] tracking-[5px] lg:tracking-[11px] font-bold">Julia Szubert</h2>
				</motion.div>
				</div>
			</div>
			{/* Hamburger menu */}
			<div
				onClick={toggleMenu}
				className="lg:hidden absolute top-0 w-full flex justify-end p-[2rem] pr-[2.3rem] text-[40px] md:text-[60px] md:pr-[3rem] text-[#f8c137]">
				&#x2630;
			</div>
			{/* Slide out menu */}
			<div
				className={`absolute top-0 ${
					menuOpen ? "left-0" : "left-full"
				} lg:hidden w-full h-full z-20 bg-[#486c34] transition-all duration-500`}>
				<div className="flex flex-col justify-center items-center text-center h-full gap-[2rem] text-[25px] tracking-[3px] text-[#FFECDD]">
					<a href="#about" onClick={handleMenuItemClick}>
						<div className="hover:scale-110 transition-all duration-500">About</div>
					</a>
					<a href="#experience" onClick={handleMenuItemClick}>
						<div className="hover:scale-110 transition-all duration-500">Experience</div>
					</a>
					<a href="#portfolio" onClick={handleMenuItemClick}>
						<div className="hover:scale-110 transition-all duration-500">Projects</div>
					</a>
					<a href="#contact" onClick={handleMenuItemClick}>
						<div className="hover:scale-110 transition-all duration-500">Contact</div>
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

		</div>
	)
}

export default Home