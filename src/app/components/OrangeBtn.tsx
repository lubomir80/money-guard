import { childrenProps } from "../utils/type"

type orangeBtnProps = childrenProps & {
   type?: "submit" | "reset" | "button" | undefined,
   onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
}

function OrangeBtn({ children, type, onClick }: orangeBtnProps) {
   return (
      <button
         className='bg-orange uppercase text-xl w-full py-3 rounded-full'
         type={type}
         onClick={onClick}>
         {children}
      </button>
   )
}

export default OrangeBtn