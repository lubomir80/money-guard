import { childrenProps } from "@/app/utils/type"
import { cn } from "@/lib/utils"

type containerProps = childrenProps & {
   className?: string
}


function FormContainer({ children, className }: containerProps) {
   return (
      <div className={
         cn("max-w-[533px] bg-white/[.1] px-12 py-14 rounded-md",
            className
         )}>
         {children}
      </div>
   )
}

export default FormContainer