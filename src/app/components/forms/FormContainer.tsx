import { childrenProps } from "@/app/utils/type"



function FormContainer({ children }: childrenProps) {
   return (
      <div className="max-w-[533px] max-h-[630px] bg-white/[.1]
      px-12 py-14 rounded-md">
         {children}
      </div>
   )
}

export default FormContainer