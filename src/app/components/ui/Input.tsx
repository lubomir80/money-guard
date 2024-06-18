import * as React from "react"


export interface InputProps
   extends React.InputHTMLAttributes<HTMLInputElement> { }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
   ({ type, ...props }, ref) => {
      return (
         <input
            ref={ref}
            {...props}
            type={type}
            className='
         pl-8 p-2 w-full bg-transparent border-0 border-b-2 text-stone-50 border-white/50 placeholder:text-white/50
      focus:outline-none focus:shadow-outline focus:border-white  inputDarkModeOverride'
         />
      )
   }
)


export default Input


