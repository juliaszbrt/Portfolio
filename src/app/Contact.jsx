import Image from "next/image"
import { motion } from "framer-motion";
import ClickSpark from '@/components/ClickSpark';
import CircularText from '@/components/CircularText';

const Contact = () => {
  return (
    <ClickSpark
      sparkColor='#fff8f3'
      sparkSize={25}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
      className="h-auto">
      <div className="bg-[#486c34] flex justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-[1rem] my-[3rem]">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{
              opacity: 1, scale: 1
            }}
            transition={{
              type: "spring",
              duration: 2,
              bounce: 0,
            }}
            viewport={{ once: true }}>
            <h1 className="text-[2.5rem] lg:text-[5rem] xl:text-[6rem] tracking-[2px] font-medium text-[#fff8f3] [font-family:var(--font-domine)] mb-[1.5rem]">Let's Connect:</h1>
            </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{
              opacity: 1, scale: 1
            }}
            transition={{
              type: "spring",
              duration: 2,
              bounce: 0,
            }}
            viewport={{ once: true }}
            className="mt-[-1rem]">
            <Image alt="picture of two cats" width={2835} height={2835} src="/cats.jpg" className="w-[15rem] h-[15rem] lg:w-[18rem] lg:h-[18rem] xl:w-[20rem] xl:h-[20rem] rounded-full" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{
              opacity: 1, scale: 1
            }}
            transition={{
              type: "spring",
              duration: 2,
              bounce: 0,
            }}
            viewport={{ once: true }}
            className="flex gap-[0.7rem] lg:gap-[2rem] items-center text-center justify-center mt-[2rem]">
            <a target="_blank" href="https://www.linkedin.com/in/juliaszubert/" className="text-[0.8rem] lg:text-[1.2rem] xl:tracking-[3px] text-[#fff8f3] [font-family:var(--font-murecho)]">LinkedIn</a>
            <span className="text-[#fff8f3]">&#x2605;</span>
            <a target="_blank" href="https://github.com/juliaszbrt" className="text-[0.8rem] lg:text-[1.2rem] xl:tracking-[3px] text-[#fff8f3] [font-family:var(--font-murecho)]">GitHub</a>
            <span className="text-[#fff8f3]">&#x2605;</span>
            <a target="_blank" href="https://www.instagram.com/juliaszbrt/" className="text-[0.8rem] lg:text-[1.2rem] xl:tracking-[3px] text-[#fff8f3] [font-family:var(--font-murecho)]">Instagram</a>
            <span className="text-[#fff8f3]">&#x2605;</span>
            <a target="_blank" href="https://x.com/juliaszbrt?s=21" className="text-[0.8rem] lg:text-[1.2rem] xl:tracking-[3px] text-[#fff8f3] [font-family:var(--font-murecho)]">Twitter</a>
          </motion.div>
        </div>
      </div>
    </ClickSpark>
  )
}

export default Contact