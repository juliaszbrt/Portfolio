import React from 'react'
import { motion } from "framer-motion";

export const Modal = ({ isVisible, onClose, children }) => {
    if (!isVisible) return null;

    const handleClose = (e) =>{
        if (e.target.id === 'wrapper') onClose();
    }

  return (
    <div id="wrapper" className='fixed inset-0 bg-[#FF9646] bg-opacity-25 backdrop-blur-sm flex justify-center items-center' onClick={handleClose}>
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
        className="bg-[#FFECDD] rounded-[25px]">
        <div className="flex flex-col items-center gap-[4rem] overflow-y-auto border-[2.5px] border-[#3C1D06] rounded-[25px] w-[20rem] h-[35rem] md:w-[40rem] md:h-[37rem] lg:w-[55rem] lg:h-[40rem] lg:grid lg:grid-cols-2 lg:gap-[0.5rem] lg:gap-y-[5rem] 2xl:w-[100rem] 2xl:h-[50rem] p-10 md:p-20">
            {children}
        </div>
      </motion.div>
    </div>
  )
}
