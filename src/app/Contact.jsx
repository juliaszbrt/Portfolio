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
      <div className="bg-[#486c34] flex flex-col justify-center items-center">
        <div className="flex flex-row justify-center items-center gap-[1rem] lg:gap-[5rem] my-[2rem] lg:my-[3rem]">
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
            className="w-2/5 flex flex-col gap-[1rem]">
            <h1 className="text-[1.5rem] lg:text-[3rem] tracking-[2px] font-medium text-[#fff8f3] [font-family:var(--font-domine)] text-left">Hey, thanks for stopping by!</h1>
            <h2 className="hidden lg:flex lg:text-[1.3rem] xl:text-[1.2rem] tracking-[2px] font-normal text-[#B7CCAB] [font-family:var(--font-murecho)] text-left">Made with love, by Julia.</h2>
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
            className="flex justify-center">
            <Image alt="picture of two cats" width={2835} height={2835} src="/cats.jpg" className="w-[8rem] h-[8rem] lg:w-[13rem] lg:h-[13rem] xl:w-[17rem] xl:h-[17rem] rounded-full" />
          </motion.div>
        </div>
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
          className="mb-[2rem]">
          <div className="flex gap-[0.7rem] lg:gap-[2rem] items-center text-center justify-center mb-[2rem]">
            <a target="_blank" href="https://www.linkedin.com/in/juliaszubert/" className="hover:scale-[110%] transition-all duration-500 text-[0.5rem] lg:text-[1rem] tracking-[2px] xl:tracking-[3px] text-[#fff8f3] [font-family:var(--font-murecho)] underline underline-offset-[5px]">LinkedIn</a>
            <span className="text-[#fff8f3]">&#x2605;</span>
            <a target="_blank" href="https://github.com/juliaszbrt" className="hover:scale-[110%] transition-all duration-500 text-[0.5rem] lg:text-[1rem] tracking-[2px] xl:tracking-[3px] text-[#fff8f3] [font-family:var(--font-murecho)] underline underline-offset-[5px]">GitHub</a>
            <span className="text-[#fff8f3]">&#x2605;</span>
            <a target="_blank" href="https://www.instagram.com/juliaszbrt/" className="hover:scale-[110%] transition-all duration-500 text-[0.5rem] lg:text-[1rem] tracking-[2px] xl:tracking-[3px] text-[#fff8f3] [font-family:var(--font-murecho)] underline underline-offset-[5px]">Instagram</a>
            <span className="text-[#fff8f3]">&#x2605;</span>
            <a target="_blank" href="https://x.com/juliaszbrt?s=21" className="hover:scale-[110%] transition-all duration-500 text-[0.5rem] lg:text-[1rem] tracking-[2px] xl:tracking-[3px] text-[#fff8f3] [font-family:var(--font-murecho)] underline underline-offset-[5px]">Twitter</a>
          </div>
          <div className="lg:hidden tracking-[2px] font-medium text-[#B7CCAB] text-[0.8rem] [font-family:var(--font-murecho)] text-center">Made with love, by Julia.</div>
          </motion.div>
      </div>
    </ClickSpark>
  )
}

export default Contact