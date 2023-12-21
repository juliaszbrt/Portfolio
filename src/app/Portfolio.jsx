'use client'
import './globals.css'
import { Fragment, useState } from "react"
import { Modal } from "@/components/Modal"
import Image from "next/image"

const Portfolio = () => {
    const [showModal1,setShowModal1] = useState(false);
    const [showModal2,setShowModal2] = useState(false);
    const [showModal3,setShowModal3] = useState(false);
  return (
    <div>
        <Fragment>
            <div className="h-auto bg-[#FFECDD]">
                <div className="flex flex-col justify-center items-center gap-[2rem] pt-[4rem] lg:pt-[7rem] lg:gap-[4rem]">
                    <div >
                        <h1 className="text-[3rem] tracking-[6px] text-[#3C1D06] lg:text-[4rem]">Portfolio.</h1>
                    </div>
                    <div className="flex flex-col gap-[3rem] mb-[4rem] lg:mb-[8rem] lg:flex-row lg:gap-[5rem]">
                        
                        <div id='box1' className="cursor-pointer h-[25rem] w-[16rem] lg:h-[23rem] lg:w-[16rem] border-[2.5px] border-[#3C1D06] rounded-[30px] flex items-center duration-500 ease-in-out" onClick={() => setShowModal1(true)}>
                            <div className="m-[2rem] text-[#3C1D06]">
                                <h2 id="fullStack" className='text-[1.5rem] tracking-[2px] mb-[1rem] leading-[2.6rem] underline decoration-[15px] decoration-[#B1CAD9] underline-offset-[-8px] lg:no-underline'>Full Stack Development</h2>
                                <p className="text-[1rem] tracking-[1.5px] leading-[2.4rem] lg:leading-[2rem]">
                                    Interactive programs written from start 
                                    to finish with flawlessly functioning 
                                    front & backends.
                                </p>
                            </div>
                        </div>

                        <div id='box2' className="cursor-pointer h-[25rem] w-[16rem] lg:h-[23rem] lg:w-[16rem] border-[2.5px] border-[#3C1D06] rounded-[30px] flex items-center duration-500 ease-in-out" onClick={() => setShowModal2(true)}>
                            <div className="m-[2rem] text-[#3C1D06]">
                                <h2 id="webDev" className='text-[1.5rem] tracking-[2px] mb-[1rem] leading-[2.6rem] underline decoration-[15px] decoration-[#FACE5D] underline-offset-[-8px]  lg:no-underline'>Web Development</h2>
                                <p className="text-[1rem] tracking-[1.5px] leading-[2.4rem] lg:leading-[2rem]">
                                    Fully responsive webpages accompanied 
                                    by stunning visuals and a seamless 
                                    user experience.
                                </p>
                            </div>
                        </div>
                        <div id='box3' className="cursor-pointer h-[25rem] w-[16rem] lg:h-[23rem] lg:w-[16rem] border-[2.5px] border-[#3C1D06] rounded-[30px] flex items-center duration-500 ease-in-out" onClick={() => setShowModal3(true)}>
                            <div className="m-[2rem] text-[#3C1D06]">
                                <h2 id="design" className='text-[1.5rem] tracking-[2px] mb-[1rem] leading-[2.6rem] underline decoration-[15px] decoration-[#b9d193] underline-offset-[-8px]  lg:no-underline'>Graphic Design</h2>
                                <p className="text-[1rem] tracking-[1.5px] leading-[2.4rem] lg:leading-[2rem]">
                                    Beautiful minimalistic designs created 
                                    through thoughtful planning and detailed execution.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal isVisible={showModal1} onClose={()=>setShowModal1(false)}>
                <div className="flex flex-col gap-[2rem] my-[2rem]">
                    <div className="flex flex-col items-center">
                        <h2 className="font-semibold text-[1.5rem] tracking-[4px] text-[#3C1D06]">GOOSE</h2>
                        <p className="text-[15px] tracking-[2px]">
                            September 2023
                        </p>
                        <a target="_blank" href="https://sillygoose.vercel.app" className="mt-[1rem]">
                            <div className='relative w-[12rem] h-[12rem]'>
                                <Image fill src="/goose.png" className="object-cover border-[2.5px] border-[#F8C39A]"></Image>
                            </div>
                        </a>
                    </div>
                    <div className="flex flex-col items-center">
                        <h2 className="font-semibold text-[1.5rem] tracking-[3px] text-[#3C1D06]">To Bee Continued</h2>
                        <p className="text-[15px] tracking-[2px]">
                            February 2023
                        </p>
                        <a target="_blank" href="https://juliaszbrt.github.io/ToBeeContinued/" className="mt-[1rem]">
                            <div className='relative w-[12rem] h-[12rem]'>
                                <Image fill src="/tbc.png" className="object-cover border-[2.5px] border-[#CEA024]"></Image>
                            </div>
                        </a>
                    </div>
                </div>
            </Modal>
            <Modal isVisible={showModal2} onClose={()=>setShowModal2(false)}></Modal>
            <Modal isVisible={showModal3} onClose={()=>setShowModal3(false)}></Modal>
        </Fragment>
    </div>
  )
}

export default Portfolio