import Image from "next/image"

const About = () => {
  return (
    <div className="h-auto bg-[#F8C39A]">
        <div className="flex flex-col gap-[3rem] lg:flex lg:flex-row lg:justify-center">
            <div className="lg:flex gap-[4rem] lg:my-[4rem] lg:items-center lg:basis-2/3 lg:justify-center">
                <div className="flex justify-center mt-[4rem] mb-[2rem] lg:my-0">
                    <Image alt="profile photo" loading="lazy" width={1242} height={1242} src="/headshot.jpg" 
                    className="rounded-full h-[16rem] w-[16rem] border-[1.5rem]
                    border-[#FFDDC2] lg:h-[18rem] lg:w-[18rem]"></Image>
                </div>
                <div className="flex justify-center ">
                    <div className="w-[16rem] lg:w-[23rem]">
                        <h1 className="mb-[1rem] text-[1.7rem] tracking-[5px] font-semibold text-[#3C1D06] lg:text-[2rem]">
                            ABOUT ME...
                        </h1>
                        <p className="text-justify text-[0.8rem] tracking-[1.8px] leading-6 text-[#3C1D06] lg:text-[1rem] lg:leading-10">
                            I love to express my passion for the work 
                            that I do through my designs. Currently 
                            a second year <b>Computer Science</b> student at 
                            TMU, I am always looking for ways to improve 
                            my skills and gain new experiences by 
                            constantly challenging myself. 
                        </p>
                    </div>
                </div>
            </div>
            <div className="relative h-[15rem] lg:h-[35rem] lg:basis-1/3">
                <Image alt="sakura" fill src="/sakura.jpg" className="object-cover"></Image>
            </div>
        </div>
    </div>
  )
}

export default About