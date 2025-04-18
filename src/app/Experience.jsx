'use client'
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div>
      <div className="h-auto px-[5rem] py-[5rem]">
        <div className="flex justify-center">
          <div className="flex flex-col">
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
              className="flex flex-col items-center lg:items-start">
              <h1 className="text-center text-[30px] md:text-[3rem] tracking-[10px] text-[#3C1D06] font-bold [font-family:var(--font-oshigo)]">Experience</h1>
            </motion.div>
            <div className="flex items-center flex-col gap-[4rem] md:gap-[2rem] lg:flex-row lg:justify-start mt-[3rem]">
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
                id="cohereBox" className="flex items-center w-[17rem] h-[17rem] p-[30px] md:w-[17rem] md:h-[17rem] lg:w-[18rem] lg:h-[18rem] xl:w-[22rem] xl:h-[22rem] border-[3px] border-[#3C1D06]">
                <div>
                  <h2 className="text-[19px] lg:text-[23px] xl:text-[27px] tracking-[1.5px] mb-[0.5rem] font-semibold">AI Data Engineer</h2>
                  <h3 className="text-[16px] lg:text-[18px] xl:text-[24px] xl:tracking-[1.5px] mb-[0.5rem] font-semibold">Cohere</h3>
                  <h4 className="text-[13px] lg:text-[14px] xl:text-[18px] xl:tracking-[1.5px] mb-[1rem]">Sep 2023 - Mar 2025</h4>
                  <div className="flex gap-[10px] gap-y-[15px] flex-wrap mt-[2rem] text-[#3C1D06] tracking-[1px]">
                    <div className="bg-[#FACE5D] text-[15px] lg:text-[18px] text-center rounded-full px-[10px] py-[2px] lg:px-[15px] lg:py-[3px]">Python</div>
                    <div className="bg-[#b9d193] text-[15px] lg:text-[18px] text-center rounded-full px-[10px] py-[2px] lg:px-[15px] lg:py-[3px]">SQL</div>
                    <div className="bg-[#F8C39A] text-[15px] lg:text-[18px] text-center rounded-full px-[10px] py-[2px] lg:px-[15px] lg:py-[3px]">Java</div>
                    <div className="bg-[#B1CAD9] text-[15px] lg:text-[18px] text-center rounded-full px-[10px] py-[2px] lg:px-[15px] lg:py-[3px]">JavaScript</div>
                  </div>
                </div>
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
                  viewport={{ once: true }} className="flex items-center w-[17rem] h-[17rem] p-[30px] md:w-[17rem] md:h-[17rem] lg:w-[18rem] lg:h-[18rem] xl:w-[22rem] xl:h-[22rem] border-[3px] border-[#3C1D06] border-dashed">
                <div>
                  <h2 className="text-[19px] lg:text-[23px] xl:text-[27px] tracking-[1.5px] mb-[0.5rem] font-semibold"></h2>
                  <h3 className="text-[16px] lg:text-[18px] xl:text-[24px] xl:tracking-[1.5px] font-semibold"></h3>
                  <h4 className="text-[13px] lg:text-[14px] xl:text-[18px] xl:tracking-[1.5px] mb-[1rem]"></h4>
                  <div className="flex gap-[10px] gap-y-[15px] flex-wrap mt-[2rem] text-[#3C1D06] tracking-[1px]">

                  </div>
                </div>
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
                  viewport={{ once: true }} className="hidden lg:flex w-[17rem] h-[17rem] lg:w-[18rem] lg:h-[18rem] xl:w-[22rem] xl:h-[22rem] border-[3px] border-[#3C1D06] border-dashed">
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
