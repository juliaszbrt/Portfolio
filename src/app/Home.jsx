'use client'
import Link from "next/link";
import { Murecho } from 'next/font/google'
import { motion } from "framer-motion";

const murecho = Murecho({ subsets: ['latin'] })

const Home = () => {
  return (
    <div className="h-screen bg-[#FFECDD]">
        <div className="h-screen flex justify-center items-center">
              <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{
                      once: true,
                  }}
                  transition={{ duration: 1 }}>
                <h1 className={`text-[#ffdf8f] text-center mt-[-2rem] text-[5rem] md:text-[11rem] 2xl:text-[16rem] font-black ${murecho.className}`}>ジュリア</h1>
                <h2 className="text-[#f8c137] text-center mt-[-0.5rem] text-[2rem] md:text-[5rem] 2xl:text-[7rem] tracking-[5px] lg:tracking-[11px] font-bold">Julia Szubert</h2>
              </motion.div>
        </div>
    </div>
  )
}

export default Home