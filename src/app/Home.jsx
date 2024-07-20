'use client'
import Link from "next/link";
import "./app.js"
import { Murecho } from 'next/font/google'
import { motion } from "framer-motion";

const murecho = Murecho({ subsets: ['latin'] })

const Home = () => {
  return (
    <div className="h-screen bg-[#FFECDD]">
      <div className="flex">
        <div className="h-screen bg-[#FFDDC2] lg:flex lg:basis-1/3">
          <Link href="./contact">
            <button className="p-[3rem] absolute top-0 right-0 text-[20px] tracking-[2.5px] text-[#3C1D06] md:text-[30px]">
              Contact
            </button>
          </Link>
        </div>
        <div className="h-screen bg-[#FFECDD] lg:flex lg:basis-2/3">
          <div className="absolute  lg:ml-[2.5rem] whitespace-nowrap top-1/2 transform -translate-y-1/2 left-1/2 -translate-x-1/2 lg:left-[62%]">
              <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{
                      amount: "all",
                      once: true,
                  }}
                  transition={{ duration: 1 }}>
                <h1 className={`text-[#ffdf8f] text-center lg:text-left mt-[-2rem] text-[5rem] md:text-[11rem] 2xl:text-[16rem] font-black ${murecho.className}`}>ジュリア</h1>
                <h2 className="text-[#f8c137] text-center lg:text-left mt-[-0.5rem] lg:mt-[-2rem] text-[2rem] md:text-[5rem] 2xl:text-[7rem] tracking-[5px] lg:tracking-[11px] font-bold">Julia Szubert</h2>
              </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home