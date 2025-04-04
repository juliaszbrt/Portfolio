'use client'
import Image from "next/image"
import "./globals.css"
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="h-auto bg-[#F8C39A]">
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{
                once: true,
            }}
            transition={{ duration: 3 }}
            className="lg:flex lg:flex-row lg:justify-center">
            <div className="lg:flex lg:gap-[5rem] lg:my-[4rem] lg:items-center lg:basis-3/4 lg:mx-[4rem] lg:justify-center 2xl:gap-[9rem]">
                <div className="py-[2rem] flex flex-col justify-center gap-[2rem]">
                    <div className="relative h-[18rem] w-[18rem] lg:h-[20rem] lg:w-[20rem] 2xl:h-[27rem] 2xl:w-[27rem] overflow-hidden">
                          <Image alt="profile photo" loading="lazy" width={1242} height={1242} src="/julia.png" ></Image>
                    </div>
                    <p className="text-center leading-7 tracking-[1.8px]">
                          Bachelor of Science (BS) in Computer Science, CO-OP <br />
                          Toronto Metropolitan University
                    </p>
                </div>

                <div className="flex justify-self-center">
                    <div className="flex flex-col justify-center mb-[3rem]">
                        <h1 className="mb-[1rem] text-[1.7rem] tracking-[3px] font-semibold text-[#3C1D06] lg:text-[1.5rem] xl:text-[2.5rem]">
                            Nice to meet you!
                        </h1>
                        <p className="text-justify text-[0.8rem] tracking-[1.8px] leading-6 text-[#3C1D06] lg:text-[1rem] lg:leading-8 2xl:w-[40rem] 2xl:text-[1.3rem] 2xl:leading-10">
                            I am a <b>developer</b>, <b>designer</b>, and <b>community leader</b> based in Toronto. I enjoy meeting people through Toronto's vibrant tech community
                            and love to express my passion for the work that I do through unique designs & creative projects. Feel free to message me; let's be friends!
                        </p>
                    </div>
                </div>
            </div>
            <div className="relative h-[15rem] lg:h-auto lg:basis-1/3">
                <Image alt="sakura" fill src="/sakura.jpg" className="object-cover"></Image>
            </div>
        </motion.div>
    </div>
  )
}

export default About