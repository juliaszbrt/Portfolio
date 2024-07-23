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
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }} 
        className="bg-[#FFECDD] rounded-[25px]">
        <div className="flex flex-col items-center justify-center gap-[4rem] lg:gap-[5rem] overflow-auto border-[2.5px] border-[#3C1D06] rounded-[25px] w-[20rem] h-[25rem] md:w-[40rem] md:h-[37rem] lg:w-[55rem] lg:h-[40rem] lg:flex-row 2xl:w-[100rem] 2xl:h-[50rem]">
            {children}
        </div>
      </motion.div>
    </div>
  )
}
