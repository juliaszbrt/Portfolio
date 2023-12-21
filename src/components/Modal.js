import React from 'react'

export const Modal = ({ isVisible, onClose, children }) => {
    if (!isVisible) return null;

    const handleClose = (e) =>{
        if (e.target.id === 'wrapper') onClose();
    }

  return (
    <div id="wrapper" className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center' onClick={handleClose}>
        <div className="rounded-[25px] bg-[#FFECDD] w-[20rem] h-[35rem]">
            {children}
        </div>
    </div>
  )
}
