import { TItemForm } from "@/app/utils/type";


export default function ItemForm(
   { children, register, placeholder, errors, type }: TItemForm) {


   return (
      <div className='
      relative 
      [&_svg]:w-5 
      [&_svg]:h-5
      [&_svg]:absolute
      [&_svg]:top-2
      [&_svg]:left-0
      [&_svg]:fill-white/50
      '>
         {children}
         <input
            {...register}
            placeholder={placeholder}
            type={type}
            className='pl-8 p-2 w-full bg-transparent border-0 border-b-2 text-stone-50 border-white/50 placeholder:text-white/50
            focus:outline-none focus:shadow-outline focus:border-white  inputDarkModeOverride'
         />
         {errors && (
            <p className='text-pink-500 py-1'>{`${errors.message}`}</p>
         )}</div>
   )
}


