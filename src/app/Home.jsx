'use client'
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import ClickSpark from '@/components/ClickSpark';
import CircularText from '@/components/CircularText';

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
		<ClickSpark
		sparkColor='#88B1CA'
		sparkSize={25}
		sparkRadius={15}
		sparkCount={8}
		duration={400}
		className="h-screen bg-[#fff8f3] relative overflow-hidden">
			<div className="h-screen flex flex-col justify-center items-center lg:flex-row lg:px-[8rem] py-0 lg:py-[2rem]">
				<div className="lg:w-1/3 flex items-center justify-center">
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
						className="flex lg:flex-col lg:leading-[7rem] xl:leading-[9rem]">
						<p className="text-[#b0be98] text-center text-[4rem] md:text-[9rem] lg:text-[9rem] xl:text-[12rem] font-black [font-family:var(--font-oshigo)] lg:rotate-[-22deg] relative lg:left-[-40px] lg:bottom-[-75px] xl:left-[-50px]">ジ</p>
						<p className="text-[#f9b57d] text-center text-[4rem] md:text-[9rem] lg:text-[7rem] xl:text-[10rem] font-black [font-family:var(--font-oshigo)] lg:rotate-[13deg] relative lg:left-[60px] lg:bottom-[-40px] xl:left-[80px]">ュ</p>
						<p className="text-[#f7c956] text-center text-[4rem] md:text-[9rem] lg:text-[9rem] xl:text-[12rem] font-black [font-family:var(--font-oshigo)] relative lg:left-[-75px] lg:bottom-[-10px] xl:left-[-80px] xl:bottom-[-30px]">リ</p>
						<p className="text-[#a7cae0] text-center text-[4rem] md:text-[9rem] lg:text-[8rem] xl:text-[10rem] font-black [font-family:var(--font-oshigo)] lg:rotate-[13deg] relative lg:left-[40px] lg:bottom-[-10px] xl:left-[60px] xl:bottom-[-30px]">ア</p>
						<p className="text-[#ffcda7] text-center text-[4rem] md:text-[9rem] lg:text-[8rem] xl:text-[12rem] font-black [font-family:var(--font-oshigo)] lg:rotate-[-35deg] relative lg:left-[-65px] lg:top-[-35px] xl:left-[-70px]">!</p>
					</motion.div>
				</div>
				<div className="lg:w-2/3 flex items-center justify-center">
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
						className="flex flex-col items-center justify-center w-full lg:pl-[5rem] lg:gap-[1rem]">
						<h1 className="text-[#4a5e2a] text-center text-[4.5rem] md:text-[7.5rem] lg:text-[10rem] xl:text-[14rem] tracking-[5px] lg:tracking-[5px] md:leading-[12rem] lg:leading-[10rem] xl:leading-[15rem] font-bold [font-family:var(--font-domine)]">Julia</h1>
						<h1 className="text-[#bdc6af] text-center text-[1.2rem] md:text-[2.5rem] lg:text-[1.5rem] xl:text-[2.5rem] tracking-[3px] leading-[2rem] md:leading-[4rem] lg:leading-[3rem] font-light [font-family:var(--font-domine)]"><em>Designer & Developer, <br /> based in Toronto.</em></h1>
						<div className="hidden justify-center items-center mt-[1rem] xl:mt-[3rem] lg:flex gap-[3rem] xl:gap-[5rem] font-bold">
							<a href='#portfolio' className='text-[#f8c137] font-medium hover:scale-[110%] transition-all duration-500'>
								<CircularText
									text="PORTFOLIO&#x2605;"
									xlFontSize="18px"
									xlHeight="130px"
									spinDuration={20}
									className="custom-class">
								</CircularText>
							</a>
							<a href='#about' className='text-[#f8c137] font-medium tracking-[0px] hover:scale-[110%] transition-all duration-500'>
								<CircularText
									text="BIOGRAPHY&#x2605;"
									xlFontSize="18px"
									xlHeight="130px"
									spinDuration={20}
									className="custom-class">
								</CircularText>
							</a>
							<a href='#experience' className='text-[#f8c137] font-medium tracking-[0px] hover:scale-[110%] transition-all duration-500'>
								<CircularText
									text="EXPERIENCE&#x2605;"
									xlFontSize="18px"
									xlHeight="130px"
									spinDuration={20}
									className="custom-class">
								</CircularText>
							</a>
						</div>
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
				className={`absolute top-0 ${menuOpen ? "left-0" : "left-full"
					} lg:hidden w-full h-full z-20 bg-[#486c34] transition-all duration-500`}>
				<div className="flex flex-col justify-center items-center text-center h-full gap-[2rem] text-[25px] tracking-[3px] text-[#FFECDD]">
					<a href="#portfolio" onClick={handleMenuItemClick}>
						<div className="hover:scale-110 transition-all duration-500">Portfolio</div>
					</a>
					<a href="#about" onClick={handleMenuItemClick}>
						<div className="hover:scale-110 transition-all duration-500">Biography</div>
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

		</ClickSpark>
	)
}

export default Home