import Image from "next/image"
import "./globals.css"
import "./app.js"
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="h-auto bg-[#F8C39A]">
        <div className="lg:flex lg:flex-row lg:justify-center">
            <div className="lg:flex lg:gap-[5rem] lg:my-[4rem] lg:items-center lg:basis-3/4 lg:mx-[4rem] lg:justify-center">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{
                      amount: "all",
                      once: true,
                  }}
                  transition={{ duration: 1.5 }}
                  className="flex items-center flex-col pt-[2rem] mb-[2rem] lg:my-0 lg:pl-[1rem]">
                    <div className="relative h-[16rem] w-[16rem] lg:h-[18rem] lg:w-[18rem] 2xl:h-[20rem] 2xl:w-[20rem] rounded-full border-[1.5rem] border-[#FFDDC2] overflow-hidden">
                        <Image alt="profile photo" loading="lazy" width={1242} height={1242} src="/headshot.png" 
                        className="object-cover rounded-full"></Image>
                    </div>
                    <div className="py-[2rem] text-[0.8rem] text-center tracking-[1.8px] leading-6 text-[#3C1D06] lg:text-[1rem] lg:leading-8 lg:pb-0 2xl:text-[1.3rem]">
                        Bachelor of Science (BS)
                        <br/>
                        <b>Computer Science, CO-OP</b>
                        <br/>
                        Toronto Metropolitan University
                    </div>
                </motion.div>

                <div className="flex justify-self-center">
                    <div className="flex flex-col justify-center px-[3rem] mb-[2rem]">
                        <h1 className="mb-[1rem] text-[1.7rem] tracking-[5px] font-semibold text-[#3C1D06] lg:text-[2rem] 2xl:text-[3rem]">
                            ABOUT ME...
                        </h1>
                        <p className="text-justify text-[0.8rem] tracking-[1.8px] leading-6 text-[#3C1D06] lg:text-[1rem] lg:leading-8 2xl:w-[40rem] 2xl:text-[1.3rem] 2xl:leading-10">
                            I am <b>ambitious</b>; I put myself in situations where I can learn vital skills and gain new experiences.
                            I love to express my <b>passion</b> for the work that I do through unique designs and creative projects. 
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