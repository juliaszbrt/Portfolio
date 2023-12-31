import React from 'react'

export const Modal = ({ isVisible, onClose, children }) => {
    if (!isVisible) return null;

    const handleClose = (e) =>{
        if (e.target.id === 'wrapper') onClose();
    }

  return (
    <div id="wrapper" className='fixed inset-0 bg-[#FF9646] bg-opacity-25 backdrop-blur-sm flex justify-center items-center' onClick={handleClose}>
        <div className="overflow-auto border-[2.5px] border-[#3C1D06] rounded-[25px] bg-[#FFECDD] w-[20rem] h-[35rem] md:w-[40rem] md:h-[37rem]">
            {children}
        </div>
    </div>
  )
}
