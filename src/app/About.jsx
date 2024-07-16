import Image from "next/image"
import "./globals.css"

const About = () => {
  return (
    <div className="h-auto bg-[#F8C39A]">
        <div className="flex flex-col gap-[3rem] lg:flex lg:flex-row lg:justify-center">
            <div className="lg:flex gap-[4rem] lg:gap-[5rem] lg:my-[4rem] lg:items-center lg:basis-3/4 lg:justify-center">
                <div className="flex flex-col items-center justify-center mt-[4rem] mb-[2rem] lg:my-0">
                    <div className="relative h-[16rem] w-[16rem] lg:h-[18rem] lg:w-[18rem] rounded-full border-[1.5rem] border-[#FFDDC2] overflow-hidden">
                        <Image alt="profile photo" loading="lazy" width={1242} height={1242} src="/headshot.png" 
                        className="object-cover rounded-full"></Image>
                    </div>
                    <div className="py-[2rem] text-[0.8rem] text-center tracking-[1.8px] leading-6 text-[#3C1D06] lg:text-[1rem] lg:leading-8 lg:pb-0">
                        Bachelor of Science (BS)
                        <br/>
                        <b>Computer Science, CO-OP</b>
                        <br/>
                        Toronto Metropolitan University
                    </div>
                </div>
                <div className="flex justify-center ">
                    <div className="w-[20rem] lg:w-[22rem]">
                        <h1 className="mb-[1rem] text-[1.7rem] tracking-[5px] font-semibold text-[#3C1D06] lg:text-[2rem]">
                            ABOUT ME...
                        </h1>
                        <p className="text-justify text-[0.8rem] tracking-[1.8px] leading-6 text-[#3C1D06] lg:text-[1rem] lg:leading-8">
                            I am <b>ambitious</b>; I put myself in situations where I can learn vital skills and gain new experiences.
                            I love to express my <b>passion</b> for the work that I do through unique designs and creative projects. 
                            <br/>
                            <br/>  
                        </p>
                    </div>
                </div>
            </div>
            <div className="relative h-[15rem] lg:h-auto lg:basis-1/3">
                <Image alt="sakura" fill src="/sakura.jpg" className="object-cover"></Image>
            </div>
        </div>
    </div>
  )
}

export default About