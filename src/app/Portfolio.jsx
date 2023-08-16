
const Portfolio = () => {
  return (
    <div className="h-auto bg-[#FFECDD]">
        <div className="flex flex-col justify-center items-center gap-[2rem] pt-[4rem] lg:pt-[7rem] lg:gap-[4rem]">
            <div >
                <h1 className="text-[3rem] tracking-[6px] text-[#3C1D06] lg:text-[4rem]">Portfolio.</h1>
            </div>
            <div className="flex flex-col gap-[3rem] mb-[4rem] lg:mb-[8rem] lg:flex-row lg:gap-[5rem]">
                <div id='box1' className="cursor-pointer h-[25rem] w-[16rem] lg:h-[23rem] lg:w-[16rem] border-[2.5px] border-[#3C1D06] rounded-[30px] flex items-center duration-500 ease-in-out">
                    <div className="m-[2rem] text-[#3C1D06]">
                        <h2 id="fullStack" className='text-[1.5rem] tracking-[2px] mb-[1rem] leading-[2.6rem] underline decoration-[15px] decoration-[#B1CAD9] underline-offset-[-8px] lg:no-underline'>Full Stack Development</h2>
                        <p className="text-[1rem] tracking-[1.5px] leading-[2.4rem] lg:leading-[2rem]">
                            Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt 
                            ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>
                <div id='box2' className="cursor-pointer h-[25rem] w-[16rem] lg:h-[23rem] lg:w-[16rem] border-[2.5px] border-[#3C1D06] rounded-[30px] flex items-center duration-500 ease-in-out">
                    <div className="m-[2rem] text-[#3C1D06]">
                        <h2 id="webDev" className='text-[1.5rem] tracking-[2px] mb-[1rem] leading-[2.6rem] underline decoration-[15px] decoration-[#FACE5D] underline-offset-[-8px]  lg:no-underline'>Web Development</h2>
                        <p className="text-[1rem] tracking-[1.5px] leading-[2.4rem] lg:leading-[2rem]">
                            Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt 
                            ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>
                <div id='box3' className="cursor-pointer h-[25rem] w-[16rem] lg:h-[23rem] lg:w-[16rem] border-[2.5px] border-[#3C1D06] rounded-[30px] flex items-center duration-500 ease-in-out">
                    <div className="m-[2rem] text-[#3C1D06]">
                        <h2 id="design" className='text-[1.5rem] tracking-[2px] mb-[1rem] leading-[2.6rem] underline decoration-[15px] decoration-[#b9d193] underline-offset-[-8px]  lg:no-underline'>Graphic Design</h2>
                        <p className="text-[1rem] tracking-[1.5px] leading-[2.4rem] lg:leading-[2rem]">
                            Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt 
                            ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Portfolio