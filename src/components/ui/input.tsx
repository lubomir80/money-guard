import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
   extends React.InputHTMLAttributes<HTMLInputElement> { }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
   ({ className, type, ...props }, ref) => {
      return (
         <input
            type={type}
            className={cn(
               "flex h-10 w-full border-b-2 bg-transparent border-white/40 px-3 py-2 pl-8 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-white focus-visible:outline-none  focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50 focus:border-white/100  ",
               className
            )}
            ref={ref}
            {...props}
         />
      )
   }
)
Input.displayName = "Input"

export { Input }
