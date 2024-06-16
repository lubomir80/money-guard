import React from 'react'
import { childrenProps } from '../utils/type'

type orangeBtnType = childrenProps & {
   type?: "button" | "submit" | "reset",
   onClick?: React.MouseEventHandler<HTMLButtonElement>
   disabled?: boolean
}



function OrangeButton({ children, type, onClick, disabled }: orangeBtnType) {
   return (
      <button
         type={type}
         onClick={onClick}
         disabled={disabled}
         className='p-3 font-semibold drop-shadow-3xl bg-orange uppercase text-md w-full rounded-full
                     hover:drop-shadow-2xl hover:bg-orangeHover transition-colors disabled:bg-disable
                     focus:outline focus:outline-offset-[3px] focus:outline-fuchsia-600'>
         {children}
      </button>
   )
}

export default OrangeButton