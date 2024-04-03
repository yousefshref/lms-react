import React from 'react'
import { CgClose } from 'react-icons/cg'

const OpenFromBottom = ({ open, setOpen, children }) => {
  return (
    <div className={`
        fixed bottom-0 bg-opacity-65 bg-neutral-200 overflow-scroll backdrop-blur-sm right-0 bottom-0-0 z-50 w-full bg-center bg-cover transition-all duration-700
        ${open ? "h-full p-2" : "h-0 p-0"}
        `}>
      <span onClick={() => setOpen(false)} className={`
            flex text-white transition-all bg-red-700 rounded-full cursor-pointer hover:bg-red-500 w-fit h-fit
            ${open ? "p-2 opacity-100" : "p-0 opacity-0"}
          `}>
        <CgClose />
      </span>
      <hr className='my-3' />
      <div>
        {children}
      </div>
    </div>
  )
}

export default OpenFromBottom
