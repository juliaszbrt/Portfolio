'use client'
import './globals.css'
import { Fragment, useState } from "react"
import { Modal } from "@/components/Modal"
import Image from "next/image"
import { motion } from "framer-motion";
import Link from 'next/link';

const Portfolio = () => {
    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [showModal3, setShowModal3] = useState(false);

    return (

        <Fragment>
            <div className="h-auto bg-[#fff8f3]">
                <div id="circles" className="w-full">
                    <div className="flex items-center justify-center w-full overflow-x-auto whitespace-nowrap">
                        <div className="h-[80px] w-[80px] md:h-[100px] md:w-[100px] lg:h-[150px] lg:w-[150px] bg-[#EEB07E] rounded-full flex-shrink-0"></div>
                        <div className="h-[80px] w-[80px] md:h-[100px] md:w-[100px] lg:h-[150px] lg:w-[150px] bg-[#EEB07E] rounded-full flex-shrink-0"></div>
                        <div className="h-[80px] w-[80px] md:h-[100px] md:w-[100px] lg:h-[150px] lg:w-[150px] bg-[#EEB07E] rounded-full flex-shrink-0"></div>
                        <div className="h-[80px] w-[80px] md:h-[100px] md:w-[100px] lg:h-[150px] lg:w-[150px] bg-[#EEB07E] rounded-full flex-shrink-0"></div>
                        <div className="h-[80px] w-[80px] md:h-[100px] md:w-[100px] lg:h-[150px] lg:w-[150px] bg-[#EEB07E] rounded-full flex-shrink-0"></div>
                        <div className="h-[80px] w-[80px] md:h-[100px] md:w-[100px] lg:h-[150px] lg:w-[150px] bg-[#EEB07E] rounded-full flex-shrink-0"></div>
                        <div className="h-[80px] w-[80px] md:h-[100px] md:w-[100px] lg:h-[150px] lg:w-[150px] bg-[#EEB07E] rounded-full flex-shrink-0"></div>
                        <div className="h-[80px] w-[80px] md:h-[100px] md:w-[100px] lg:h-[150px] lg:w-[150px] bg-[#EEB07E] rounded-full flex-shrink-0"></div>
                        <div className="h-[80px] w-[80px] md:h-[100px] md:w-[100px] lg:h-[150px] lg:w-[150px] bg-[#EEB07E] rounded-full flex-shrink-0"></div>
                        <div className="h-[80px] w-[80px] md:h-[100px] md:w-[100px] lg:h-[150px] lg:w-[150px] bg-[#EEB07E] rounded-full flex-shrink-0"></div>
                        <div className="h-[80px] w-[80px] md:h-[100px] md:w-[100px] lg:h-[150px] lg:w-[150px] bg-[#EEB07E] rounded-full flex-shrink-0"></div>
                        <div className="h-[80px] w-[80px] md:h-[100px] md:w-[100px] lg:h-[150px] lg:w-[150px] bg-[#EEB07E] rounded-full flex-shrink-0"></div>
                        <div className="h-[80px] w-[80px] md:h-[100px] md:w-[100px] lg:h-[150px] lg:w-[150px] bg-[#EEB07E] rounded-full flex-shrink-0"></div>
                        <div className="h-[80px] w-[80px] md:h-[100px] md:w-[100px] lg:h-[150px] lg:w-[150px] bg-[#EEB07E] rounded-full flex-shrink-0"></div>
                        <div className="h-[80px] w-[80px] md:h-[100px] md:w-[100px] lg:h-[150px] lg:w-[150px] bg-[#EEB07E] rounded-full flex-shrink-0"></div>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-[2rem] pt-[4rem] lg:pt-[4rem] lg:gap-[3rem] 2xl:gap-[6rem]">
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
                        <h1 className="text-[3rem] tracking-[6px] text-[#ffd5b4] font-black lg:text-[6rem] [font-family:var(--font-domine)]">Portfolio:</h1>
                    </motion.div>
                    <div
                        className="flex flex-col gap-[3rem] mb-[4rem] lg:mb-[8rem] lg:flex-row lg:gap-[5rem] 2xl:gap-[7rem]">

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
                            id='box1' className="hover:scale-[105%] bg-[#fff0e4] transition-all duration-500 lg:hover:transform-none h-[23rem] w-[16rem] lg:h-[22rem] lg:w-[16rem] 2xl:h-[35rem] 2xl:w-[27rem] border-[2.5px] border-[#3C1D06] rounded-[30px] flex items-center lg:ease-in-out " onClick={() => setShowModal1(true)}>
                            <div className="m-[2rem] text-[#3C1D06]">
                                <h2 id="fullStack" className='text-[1.6rem] tracking-[2px] mb-[1rem] 2xl:mb-[3rem] leading-[2.6rem] underline decoration-[15px] decoration-[#B1CAD9] underline-offset-[-8px] lg:no-underline 2xl:text-[3.5rem]'>Development</h2>
                                <p className="text-[1rem] tracking-[1.5px] leading-[2.4rem] lg:leading-[2rem] 2xl:text-[2em] 2xl:leading-[4rem]">
                                    Interactive programs written from start
                                    to finish with flawlessly functioning
                                    front & backends.
                                </p>
                                <div className="flex justify-end">
                                    <button className="text-[#4d8eb6] justify-end font-heavy text-[25px]">
                                        &#10132;
                                    </button>
                                </div>
                            </div>
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
                            id='box2' className="hover:scale-[105%] bg-[#fff0e4] transition-all duration-500 lg:hover:transform-none h-[23rem] w-[16rem] lg:h-[22rem] lg:w-[16rem] 2xl:h-[35rem] 2xl:w-[27rem] border-[2.5px] border-[#3C1D06] rounded-[30px] flex items-center lg:ease-in-out" onClick={() => setShowModal2(true)}>
                            <div className="m-[2rem] text-[#3C1D06]">
                                <h2 id="design" className='text-[1.6rem] tracking-[2px] mb-[1rem] 2xl:mb-[3rem] leading-[2.6rem] underline decoration-[15px] decoration-[#FACE5D] underline-offset-[-8px]  lg:no-underline 2xl:text-[3.5rem]'>Design</h2>
                                <p className="text-[1rem] tracking-[1.5px] leading-[2.4rem] lg:leading-[2rem] 2xl:text-[2rem] 2xl:leading-[4rem]">
                                    Intuitive interfaces with a keen focus on seamless user interaction and stunning visuals.
                                </p>
                                <div className="flex justify-end">
                                    <button className="text-[#cf9500] justify-end font-heavy text-[25px]">
                                        &#10132;
                                    </button>
                                </div>
                            </div>
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
                            id='box3' className="hover:scale-[105%] bg-[#fff0e4] transition-all duration-500 lg:hover:transform-none h-[23rem] w-[16rem] lg:h-[22rem] lg:w-[16rem] 2xl:h-[35rem] 2xl:w-[27rem] border-[2.5px] border-[#3C1D06] rounded-[30px] flex items-center lg:ease-in-out" onClick={() => setShowModal3(true)}>
                            <div className="m-[2rem] text-[#3C1D06]">
                                <h2 id="photo" className='text-[1.6rem] tracking-[2px] mb-[1rem] 2xl:mb-[3rem] leading-[2.6rem] underline decoration-[15px] decoration-[#b9d193] underline-offset-[-8px]  lg:no-underline 2xl:text-[3.5rem]'>Community</h2>
                                <p className="text-[1rem] tracking-[1.5px] leading-[2.4rem] lg:leading-[2rem] 2xl:text-[2rem] 2xl:leading-[4rem]">
                                    Representing women in tech through leadership and passion both on campus and beyond.
                                </p>
                                <div className="flex justify-end">
                                    <button className="text-[#6b7f4c] justify-end font-heavy text-[25px]">
                                        &#10132;
                                    </button>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
            <Modal isVisible={showModal1} onClose={() => setShowModal1(false)}>
                <div className="flex flex-col items-center">
                    <a target="_blank" href="https://sillygoose.vercel.app">
                        <div className='relative w-[12rem] h-[12rem] md:w-[15rem] md:h-[15rem] 2xl:w-[23rem] 2xl:h-[23rem] hover:scale-[105%] transition-all duration-500'>
                            <Image fill src="/goose.png" className="object-cover border-[2.5px] border-[#634B39]"></Image>
                        </div>
                    </a>
                    <h2 className="font-semibold text-[1.4rem] mt-[2rem] md:text-[1.7rem] tracking-[4px] text-[#3C1D06]">GOOSE</h2>
                    <p className="text-[15px] md:text-[20px] tracking-[2px]">
                        September 2023
                    </p>
                    <a target="_blank" href="https://sillygoose.vercel.app">
                        <button className="mt-[2rem] bg-[#B1CAD9] px-[15px] py-[6px] rounded-[20px] text-[#0c3752] font-medium text-[20px] tracking-[2px] hover:scale-[105%] transition-all duration-500">
                            View
                        </button>
                    </a>
                </div>
                <div className="flex flex-col items-center">
                    <a target="_blank" href="https://happy-houseplant.vercel.app">
                        <div className='relative w-[12rem] h-[12rem] md:w-[15rem] md:h-[15rem] 2xl:w-[23rem] 2xl:h-[23rem] hover:scale-[105%] transition-all duration-500'>
                            <Image fill src="/happy.png" className="object-cover border-[2.5px] border-[#634B39]"></Image>
                        </div>
                    </a>
                    <h2 className="font-semibold text-[1.2rem] mt-[2rem] md:text-[1.7rem] tracking-[4px] text-[#3C1D06]">Happy Houseplant</h2>
                    <p className="text-[15px] md:text-[20px] tracking-[2px]">
                        August 2023
                    </p>
                    <a className="" target="_blank" href="https://happy-houseplant.vercel.app">
                        <button className="mt-[2rem] bg-[#B1CAD9] px-[15px] py-[6px] rounded-[20px] text-[#0c3752] font-medium text-[20px] tracking-[2px] hover:scale-[105%] transition-all duration-500">
                            View
                        </button>
                    </a>
                </div>
                <div className="hidden 2xl:flex flex-col items-center">
                    <a>
                        <div className='relative border-[2.5px] border-[#634B39] border-dashed w-[12rem] h-[12rem] md:w-[15rem] md:h-[15rem] 2xl:w-[23rem] 2xl:h-[23rem]'>
                        </div>
                    </a>
                    <h2 className="invisible font-semibold text-[1.4rem] mt-[2rem] md:text-[2rem] tracking-[4px] text-[#3C1D06]">Lorem Ipsum</h2>
                    <p className="invisible text-[15px] md:text-[20px] tracking-[2px]">
                        Lorem ipsum
                    </p>
                    <a className="invisible" target="_blank">
                        <button className="mt-[2rem] bg-[#B1CAD9] px-[15px] py-[6px] rounded-[20px] text-[#0c3752] font-medium text-[20px] tracking-[2px] hover:scale-[105%] transition-all duration-500">
                            View
                        </button>
                    </a>
                </div>
            </Modal>
            <Modal isVisible={showModal2} onClose={() => setShowModal2(false)}>

                <div className="flex flex-col items-center">
                    <Link href="/Digital">
                        <div className='relative w-[12rem] h-[12rem] md:w-[15rem] md:h-[15rem] 2xl:w-[23rem] 2xl:h-[23rem] hover:scale-[105%] transition-all duration-500'>
                            <Image fill src="/design/giveaway1.png" className="object-cover border-[2.5px] border-[#634B39]"></Image>
                        </div>
                    </Link>
                    <h2 className="font-semibold text-[1.4rem] mt-[2rem] md:text-[2rem] tracking-[4px] text-[#3C1D06]">Digital</h2>
                    <p className="text-[15px] md:text-[20px] tracking-[2px]">
                        Instagram Graphics
                    </p>
                    <Link href="/Digital">
                        <button className="mt-[2rem] bg-[#FACE5D] px-[15px] py-[6px] rounded-[20px] text-[#755a16] font-medium text-[20px] tracking-[2px] hover:scale-[105%] transition-all duration-500">
                            See More
                        </button>
                    </Link>
                </div>
                <div className="flex flex-col items-center">
                    <Link href="/Traditional">
                        <div className='relative w-[12rem] h-[12rem] md:w-[15rem] md:h-[15rem] 2xl:w-[23rem] 2xl:h-[23rem] hover:scale-[105%] transition-all duration-500'>
                            <Image fill src="/design/hoyeon.JPG" className="object-cover border-[2.5px] border-[#634B39]"></Image>
                        </div>
                    </Link>
                    <h2 className="font-semibold text-[1.4rem] mt-[2rem] md:text-[2rem] tracking-[4px] text-[#3C1D06]">Traditional</h2>
                    <p className="text-[15px] md:text-[20px] tracking-[2px]">
                        Primarily Graphite
                    </p>
                    <Link href="/Traditional">
                        <button className="mt-[2rem] bg-[#FACE5D] px-[15px] py-[6px] rounded-[20px] text-[#755a16] font-medium text-[20px] tracking-[2px] hover:scale-[105%] transition-all duration-500">
                            See More
                        </button>
                    </Link>
                </div>
                <div className="hidden 2xl:flex flex-col items-center">
                    <a>
                        <div className='relative border-[2.5px] border-[#634B39] border-dashed w-[12rem] h-[12rem] md:w-[15rem] md:h-[15rem] 2xl:w-[23rem] 2xl:h-[23rem]'>
                        </div>
                    </a>
                    <h2 className="invisible font-semibold text-[1.4rem] mt-[2rem] md:text-[2rem] tracking-[4px] text-[#3C1D06]">Lorem Ipsum</h2>
                    <p className="invisible text-[15px] md:text-[20px] tracking-[2px]">
                        Lorem ipsum
                    </p>
                    <a className="invisible" target="_blank">
                        <button className="mt-[2rem] bg-[#FACE5D] px-[15px] py-[6px] rounded-[20px] text-[#755a16] font-medium text-[20px] tracking-[2px] hover:scale-[105%] transition-all duration-500">
                            View
                        </button>
                    </a>
                </div>
            </Modal>
            <Modal isVisible={showModal3} onClose={() => setShowModal3(false)}>
                <div className="flex flex-col items-center">
                    <Link href="/GDG">
                        <div className='relative w-[12rem] h-[12rem] md:w-[15rem] md:h-[15rem] 2xl:w-[23rem] 2xl:h-[23rem] hover:scale-[105%] transition-all duration-500'>
                            <Image fill src="/gdg.jpg" className="object-cover border-[2.5px] border-[#634B39]"></Image>
                        </div>
                    </Link>
                    <h2 className="font-semibold text-[1.4rem] mt-[2rem] md:text-[2rem] text-center tracking-[4px] text-[#3C1D06] lg:text-[20px] lg:tracking-[2px]">Google Developer Groups<br />President</h2>
                    <p className="text-[15px] md:text-[18px] tracking-[2px] mt-[1rem]">
                        September 2023 - Present
                    </p>
                    <a href="/GDG">
                        <button className="mt-[2rem] bg-[#b9d193] px-[15px] py-[6px] rounded-[20px] text-[#576e32] font-medium text-[20px] tracking-[2px] hover:scale-[105%] transition-all duration-500">
                            Learn More
                        </button>
                    </a>
                </div>
                <div className="flex flex-col items-center">
                    <Link href="/WTM">
                        <div className='relative w-[12rem] h-[12rem] md:w-[15rem] md:h-[15rem] 2xl:w-[23rem] 2xl:h-[23rem] hover:scale-[105%] transition-all duration-500'>
                            <Image fill src="/wtm.jpg" className="object-cover border-[2.5px] border-[#634B39]"></Image>
                        </div>
                    </Link>
                    <h2 className="font-semibold text-[1.4rem] mt-[2rem] text-center md:text-[2rem] tracking-[4px] text-[#3C1D06] lg:text-[20px] lg:tracking-[2px]">Google Women Techmakers <br /> Ambassador</h2>
                    <p className="text-[15px] md:text-[18px] tracking-[2px] mt-[1rem]">
                        August 2024 - Present
                    </p>
                    <Link href="/WTM">
                        <button className="mt-[2rem] bg-[#b9d193] px-[15px] py-[6px] rounded-[20px] text-[#576e32] font-medium text-[20px] tracking-[2px] hover:scale-[105%] transition-all duration-500">
                            Learn More
                        </button>
                    </Link>
                </div>
                <div className="flex flex-col items-center">
                    <Link href="/CSCU">
                        <div className='relative w-[12rem] h-[12rem] md:w-[15rem] md:h-[15rem] 2xl:w-[23rem] 2xl:h-[23rem] hover:scale-[105%] transition-all duration-500'>
                            <Image fill src="/community/cscu.jpg" className="object-cover border-[2.5px] border-[#634B39]"></Image>
                        </div>
                    </Link>
                    <h2 className="font-semibold text-[1.4rem] mt-[2rem] md:text-[2rem] text-center tracking-[4px] text-[#3C1D06] lg:text-[20px] lg:tracking-[2px]">Computer Sci. Course Union<br />Various</h2>
                    <p className="text-[15px] md:text-[18px] tracking-[2px] mt-[1rem]">
                        September 2023 - April 2025
                    </p>
                    <a href="/CSCU">
                        <button className="mt-[2rem] bg-[#b9d193] px-[15px] py-[6px] rounded-[20px] text-[#576e32] font-medium text-[20px] tracking-[2px] hover:scale-[105%] transition-all duration-500">
                            Learn More
                        </button>
                    </a>
                </div>
                <div className="flex flex-col items-center">
                    <Link href="/WiCS">
                        <div className='relative w-[12rem] h-[12rem] md:w-[15rem] md:h-[15rem] 2xl:w-[23rem] 2xl:h-[23rem] hover:scale-[105%] transition-all duration-500'>
                            <Image fill src="/community/wics.jpg" className="object-cover border-[2.5px] border-[#634B39]"></Image>
                        </div>
                    </Link>
                    <h2 className="font-semibold text-[1.4rem] mt-[2rem] text-center md:text-[2rem] tracking-[4px] text-[#3C1D06] lg:text-[20px] lg:tracking-[2px]">Women in Computer Science <br /> Photographer</h2>
                    <p className="text-[15px] md:text-[18px] tracking-[2px] mt-[1rem]">
                        May 2023 - May 2024
                    </p>
                    <Link href="/WiCS">
                        <button className="mt-[2rem] bg-[#b9d193] px-[15px] py-[6px] rounded-[20px] text-[#576e32] font-medium text-[20px] tracking-[2px] hover:scale-[105%] transition-all duration-500">
                            Learn More
                        </button>
                    </Link>
                </div>
            </Modal>
        </Fragment>
    )
}

export default Portfolio