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
    <div className="mb-[2rem]">
        <Fragment>
            <div className="h-auto bg-[#FFECDD]">
                <div className="flex flex-col justify-center items-center gap-[2rem] pt-[4rem] lg:pt-[7rem] lg:gap-[4rem]">
                    <div >
                        <h1 className="text-[3rem] tracking-[6px] text-[#3C1D06] lg:text-[4rem]">Portfolio.</h1>
                    </div>
                    <div className="flex flex-col gap-[3rem] mb-[4rem] lg:mb-[8rem] lg:flex-row lg:gap-[5rem]">
                        
                        <div id='box1' className="hover:scale-[105%] transition-all duration-500 lg:hover:transform-none cursor-pointer h-[23rem] w-[16rem] lg:h-[22rem] lg:w-[16rem] 2xl:h-[26rem] 2xl:w-[19rem] border-[2.5px] border-[#3C1D06] rounded-[30px] flex items-center lg:duration-500 lg:ease-in-out " onClick={() => setShowModal1(true)}>
                            <div className="m-[2rem] text-[#3C1D06]">
                                <h2 id="fullStack" className='text-[1.6rem] tracking-[2px] mb-[1rem] 2xl:mb-[1.5rem] leading-[2.6rem] underline decoration-[15px] decoration-[#b9d193] underline-offset-[-8px] lg:no-underline 2xl:text-[2.2rem]'>Development</h2>
                                <p className="text-[1rem] tracking-[1.5px] leading-[2.4rem] lg:leading-[2rem] 2xl:text-[1.2rem] 2xl:leading-[2.7rem]">
                                    Interactive programs written from start 
                                    to finish with flawlessly functioning 
                                    front & backends.
                                </p>
                            </div>
                        </div>

                        <div id='box2' className="hover:scale-[105%] transition-all duration-500 lg:hover:transform-none cursor-pointer h-[23rem] w-[16rem] lg:h-[22rem] lg:w-[16rem] 2xl:h-[26rem] 2xl:w-[19rem] border-[2.5px] border-[#3C1D06] rounded-[30px] flex items-center lg:duration-500 lg:ease-in-out" onClick={() => setShowModal2(true)}>
                            <div className="m-[2rem] text-[#3C1D06]">
                                <h2 id="design" className='text-[1.6rem] tracking-[2px] mb-[1rem] 2xl:mb-[1.5rem] leading-[2.6rem] underline decoration-[15px] decoration-[#FACE5D] underline-offset-[-8px]  lg:no-underline 2xl:text-[2.2rem]'>Design</h2>
                                <p className="text-[1rem] tracking-[1.5px] leading-[2.4rem] lg:leading-[2rem] 2xl:text-[1.2rem] 2xl:leading-[2.7rem]">
                                    Beautiful, diverse designs created 
                                    through thoughtful planning and detailed execution.
                                </p>
                            </div>
                        </div>
                        <div id='box3' className="hover:scale-[105%] transition-all duration-500 lg:hover:transform-none cursor-pointer h-[23rem] w-[16rem] lg:h-[22rem] lg:w-[16rem] 2xl:h-[26rem] 2xl:w-[19rem] border-[2.5px] border-[#3C1D06] rounded-[30px] flex items-center lg:duration-500 lg:ease-in-out" onClick={() => setShowModal3(true)}>
                            <div className="m-[2rem] text-[#3C1D06]">
                                <h2 id="photo" className='text-[1.6rem] tracking-[2px] mb-[1rem] 2xl:mb-[1.5rem] leading-[2.6rem] underline decoration-[15px] decoration-[#B1CAD9] underline-offset-[-8px]  lg:no-underline 2xl:text-[2.2rem]'>Photography</h2>
                                <p className="text-[1rem] tracking-[1.5px] leading-[2.4rem] lg:leading-[2rem] 2xl:text-[1.2rem] 2xl:leading-[2.7rem]">
                                    Fleeting moments, creatively captured and meticulously edited to produce 
                                    timeless visual stories.  
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal isVisible={showModal1} onClose={()=>setShowModal1(false)}>
                <div className="flex flex-col gap-[2rem] my-[2rem]">
                    <div className="flex flex-col items-center">
                        <h2 className="font-semibold text-[1.5rem] md:text-[2rem] tracking-[4px] text-[#3C1D06]">GOOSE</h2>
                        <p className="text-[15px] md:text-[20px] tracking-[2px]">
                            September 2023
                        </p>
                        <a target="_blank" href="https://sillygoose.vercel.app" className="mt-[1rem]">
                            <div className='relative w-[12rem] h-[12rem] md:w-[15rem] md:h-[15rem] hover:scale-[105%] transition-all duration-500'>
                                <Image fill src="/goose.png" className="object-cover border-[2.5px] border-[#634B39]"></Image>
                            </div>
                        </a>
                    </div>
                    <div className="flex flex-col items-center">
                        <h2 className="font-semibold text-[1.5rem] md:text-[2rem] tracking-[4px] text-[#3C1D06]">Happy Houseplant</h2>
                        <p className="text-[15px] md:text-[20px] tracking-[2px]">
                            August 2023
                        </p>
                        <a target="_blank" href="https://happy-houseplant.vercel.app" className="mt-[1rem]">
                            <div className='relative w-[12rem] h-[12rem] md:w-[15rem] md:h-[15rem] hover:scale-[105%] transition-all duration-500'>
                                <Image fill src="/happy.png" className="object-cover border-[2.5px] border-[#634B39]"></Image>
                            </div>
                        </a>
                    </div>  
                    <div className="flex flex-col items-center">
                        <h2 className="font-semibold text-[1.2rem] md:text-[2rem] tracking-[4px] text-[#3C1D06] text-center">Custom To-Do List</h2>
                        <p className="text-[15px] md:text-[20px] tracking-[2px]">
                            July 2023
                        </p>
                        <a target="_blank" href="https://juliaszbrt.github.io/ToDoList/" className="mt-[1rem]">
                            <div className='relative w-[12rem] h-[12rem] md:w-[15rem] md:h-[15rem] hover:scale-[105%] transition-all duration-500'>
                                <Image fill src="/todo.png" className="object-cover border-[2.5px] border-[#634B39]"></Image>
                            </div>
                        </a>
                    </div>
                    <div className="flex flex-col items-center">
                        <h2 className="font-semibold text-[1.5rem] md:text-[2rem] tracking-[3px] text-[#3C1D06]">To Bee Continued</h2>
                        <p className="text-[15px] md:text-[20px] tracking-[2px]">
                            February 2023
                        </p>
                        <a target="_blank" href="https://juliaszbrt.github.io/ToBeeContinued/" className="mt-[1rem]">
                            <div className='relative w-[12rem] h-[12rem] md:w-[15rem] md:h-[15rem] hover:scale-[105%] transition-all duration-500'>
                                <Image fill src="/tbc.png" className="object-cover border-[2.5px] border-[#634B39]"></Image>
                            </div>
                        </a>
                    </div>
                </div>
            </Modal>
            <Modal isVisible={showModal2} onClose={()=>setShowModal2(false)}>
                <div className="flex flex-col gap-[2rem] my-[2rem]">
                    <div className="flex flex-col items-center">
                            <h2 className="font-semibold text-[1.5rem] md:text-[2rem] tracking-[4px] text-[#3C1D06]">Instagram Graphics</h2>
                            <p className="text-[15px] md:text-[20px] tracking-[2px]">
                                September 2023 - Present
                            </p>
                            <a target="_blank" href="https://www.instagram.com/gdsc.tmu/" className="mt-[1rem]">
                                <div className='relative w-[12rem] h-[12rem] md:w-[15rem] md:h-[15rem] hover:scale-[105%] transition-all duration-500'>
                                    <Image fill src="/gdsc.png" className="object-cover border-[2.5px] border-[#634B39]"></Image>
                                </div>
                            </a>
                        </div>
                </div>
            </Modal>
            <Modal isVisible={showModal3} onClose={()=>setShowModal3(false)}>
                <div className="flex flex-col gap-[2rem] my-[2rem]">
                    <div className="flex flex-col items-center">      
                        <p className="mt-[3rem] text-[1rem] tracking-[4px] lg:text-[2rem]">Under Construction :)</p>
                    </div>
                </div>
            </Modal>
        </Fragment>
    </div>
  )
}

export default Portfolio