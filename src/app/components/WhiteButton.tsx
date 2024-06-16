import Link from 'next/link'
import React from 'react'
import { childrenProps } from '../utils/type'

type whiteBtnType = childrenProps & {
   type?: "button" | "submit" | "reset",
   href?: string,
   onClick?: React.MouseEventHandler<HTMLButtonElement>
   disabled?: boolean
}


function WhiteButton({ children, type, href, onClick, disabled }: whiteBtnType) {
   if (href) {
      return (
         <Link
            href={href}
            className='p-3 drop-shadow-3xl font-semibold bg-white text-indigo uppercase text-md w-full rounded-full text-center
            hover:drop-shadow-2xl hover:bg-white/[.9] transition-colors focus:outline focus:outline-offset-[3px] focus:outline-fuchsia-600'>
            {children}
         </Link>
      )
   }

   return (
      <button
         type={type}
         onClick={onClick}
         disabled={disabled}
         className='p-3 drop-shadow-3xl font-semibold bg-white text-indigo uppercase text-md w-full rounded-full text-center
            hover:drop-shadow-2xl hover:bg-white/[.9] transition-colors disabled:bg-disable disabled:text-slate-50/50 focus:outline focus:outline-offset-[3px] focus:outline-fuchsia-600' >
         {children}
      </button>
   )
}

export default WhiteButton