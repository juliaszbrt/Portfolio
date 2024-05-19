import Image from "next/image"
import "./globals.css"

const About = () => {
  return (
    <div className="h-auto bg-[#F8C39A]">
        <div className="flex flex-col gap-[3rem] lg:flex lg:flex-row lg:justify-center">
            <div className="lg:flex gap-[4rem] lg:my-[4rem] lg:items-center lg:basis-2/3 lg:justify-center">
                <div className="flex justify-center mt-[4rem] mb-[2rem] lg:my-0">
                    <div className="relative h-[16rem] w-[16rem] lg:h-[18rem] lg:w-[18rem] rounded-full border-[1.5rem] border-[#FFDDC2] overflow-hidden">
                        <Image alt="profile photo" loading="lazy" width={1242} height={1242} src="/headshot.png" 
                        className="object-cover rounded-full"></Image>
                    </div>
                </div>
                <div className="flex justify-center ">
                    <div className="w-[20rem] lg:w-[22rem]">
                        <h1 className="mb-[1rem] text-[1.7rem] tracking-[5px] font-semibold text-[#3C1D06] lg:text-[2rem]">
                            ABOUT ME...
                        </h1>
                        <p className="text-justify text-[0.8rem] tracking-[1.8px] leading-6 text-[#3C1D06] lg:text-[1rem] lg:leading-8">
                            Currently in my second year of studying <b>Computer Science</b> at TMU,
                            I am always looking for ways to improve student life on campus
                            by being actively involved in <b>extracurriculars</b> at my university.
                            <br/>
                            <br/>  
                            I am <b>ambitious</b>; I strive to challenge myself by putting myself
                            in situations where I can learn vital skills and gain new experiences.
                            I love to express my <b>passion</b> for the work that I do through my
                            designs and personal projects. 
                            <br/>
                            <br/>  
                        </p>
                        <p id="achievements" className="text-justify text-[0.8rem] tracking-[1.8px] underline decoration-[12px] decoration-[#FFDDC2] underline-offset-[-9.5px] leading-6 text-[#3C1D06] lg:text-[1rem] lg:leading-8">Check out my achievements here!</p> 
                    </div>
                </div>
            </div>
            <div className="relative h-[15rem] lg:h-[40rem] lg:basis-1/3">
                <Image alt="sakura" fill src="/sakura.jpg" className="object-cover"></Image>
            </div>
        </div>
    </div>
  )
}

export default About