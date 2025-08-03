'use client'
import Image from "next/image"
import "./globals.css"
import { motion } from "framer-motion";


const About = () => {
    return (
        <div className="h-auto bg-[#F8C39A]">
            <div
                className="lg:flex lg:flex-row lg:justify-center">
                <div className="lg:flex lg:gap-[5rem] lg:my-[4rem] lg:items-center lg:basis-3/4 lg:mx-[4rem] lg:justify-center 2xl:gap-[9rem]">
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
                        className="py-[2rem] flex flex-col justify-center gap-[2rem] items-center">
                        <div
                            className="relative mt-[1.5rem] h-[17rem] w-[17rem] lg:mt-0 lg:h-[15rem] lg:w-[15rem] xl:h-[18rem] xl:w-[18rem] overflow-hidden">
                            <Image alt="profile photo" loading="lazy" width={1242} height={1242} src="/julia.png" ></Image>
                        </div>
                        <h3 className="text-[#3C1D06] text-[0.8rem] xl:text-[1.2rem] mx-[1.5rem] text-center leading-7 tracking-[1.8px] [font-family:var(--font-murecho)]">
                            <em>Bachelor of Science (BS) in Computer Science, CO-OP </em>
                        </h3>
                        <h3 className="font-thin text-[#3C1D06] text-[0.8rem] xl:text-[1.2rem] mx-[1.5rem] text-center leading-7 tracking-[1.8px] [font-family:var(--font-murecho)]">
                            <b>Toronto Metropolitan University</b>
                        </h3>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            type: "spring",
                            duration: 2,
                            bounce: 0,
                        }}
                        viewport={{ once: true }}
                        className="flex ">
                        <div
                            className="flex flex-col mx-[1.5rem] xl:gap-[1.5rem]">
                            <h1 className="mb-[1rem] text-[1.7rem] tracking-[3px] font-medium text-[#3C1D06] lg:text-[1.5rem] xl:text-[2.2rem] [font-family:var(--font-domine)]">
                                I'm a Developer, Designer, and Community Leader.
                            </h1>
                            <p className="text-justify text-[0.8rem] mb-[2rem] lg:mb-0 tracking-[1.8px] leading-6 text-[#3C1D06] lg:text-[0.9rem] lg:leading-8 xl:text-[1.2rem] [font-family:var(--font-murecho)]">
                                I thrive in creative & playful environments. With an artistic eye and a passion for building, I breathe life into the ordinary.
                                Feel free to <a href='#contact' className="underline underline-offset-[5px]">contact me</a>; let's be friends!
                            </p>
                            <div></div>
                        </div>
                    </motion.div>
                </div>
                <div className="relative h-[15rem] lg:h-auto lg:basis-1/3">
                    <Image alt="sakura" fill src="/sakura.jpg" className="object-cover"></Image>
                </div>
            </div>
        </div>
    )
}

export default About