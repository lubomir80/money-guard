import { TAddTransaction } from '@/app/lib/type/type'
import { FormControl, FormField, FormItem } from '@/app/components/ui/form'
import { Switch } from '@/app/components/ui/switch'
import type { Control } from "react-hook-form"



type ThumbProps = {
   control?: Control<TAddTransaction> | undefined
   toggle: boolean,
}




function Thumb({ control, toggle }: ThumbProps) {
   const incomeStyle = toggle ? "text-[#FFB627]" : ""
   const expenseStyle = !toggle ? "text-coral" : ""
   const thumbStyle = toggle ? "bg-[#FFB627]" : "bg-coral"

   return (
      <FormField
         control={control}
         name="type"
         render={({ field }) => (
            <FormItem className="flex gap-6 relative ">
               <span
                  className={`${incomeStyle} mt-2`}>
                  Income
               </span>
               <FormControl>
                  <Switch
                     id="type"
                     checked={field.value}
                     onCheckedChange={field.onChange}
                     className={`${thumbStyle}`}>
                  </Switch>
               </FormControl>
               <span
                  className={`${expenseStyle}`}
               >Expense</span>
            </FormItem>
         )}
      />
   )
}

export default Thumb