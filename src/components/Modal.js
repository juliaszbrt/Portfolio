import React from 'react'

export const Modal = ({ isVisible, onClose, children }) => {
    if (!isVisible) return null;

    const handleClose = (e) =>{
        if (e.target.id === 'wrapper') onClose();
    }

  return (
    <div id="wrapper" className='fixed inset-0 bg-[#FF9646] bg-opacity-25 backdrop-blur-sm flex justify-center items-center' onClick={handleClose}>
        <div className="border-[2px] border-[#905426] rounded-[25px] bg-[#FFECDD] w-[20rem] h-[35rem]">
            {children}
        </div>
    </div>
  )
}
