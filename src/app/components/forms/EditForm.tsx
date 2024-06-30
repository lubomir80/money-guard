"use client"
import { Input } from "@/app/components/ui/input"
import { Button } from "@/app/components/ui/button"
import {
   Form,
   FormControl,
   FormField,
   FormItem,
   FormMessage
} from "@/app/components/ui/form"
import { useForm, type FieldValues } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { TAddTransaction, addTransactionSchema } from "@/app/lib/type/type"
import FormContainer from "./FormContainer"
import Thumb from './Thumb'
import categories from "@/app/lib/categoriesData"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/components/ui/select"


const test = {
   type: false,
   category: "Products",
   comment: "invoice transaction at Robel and Sons using card ending with ***(...3014) for DKK 214.33 in account ***14211005",
   sum: "407.37",
   date: "2023-09-22T07:47:09.339Z",
   id: "8"
}



function EditForm() {


   const initialState = {
      type: true,
      categories: "Car",
      sum: 1000,
      date: "26/04/2024",
      comment: "Oil",
   }


   const form = useForm<TAddTransaction>({
      mode: "onChange",
      resolver: zodResolver(addTransactionSchema),
      defaultValues: initialState
   })

   const handlerSubmit = (values: FieldValues): void => {
      console.log({ ...values });
      form.reset()
   }


   const toggleHandler = !form.watch("type")




   return (
      <FormContainer>
         <Form {...form}>
            <form
               className="flex flex-col gap-10 items-center"
               onSubmit={form.handleSubmit(handlerSubmit)}>
               <h1 className='text-3xl'>Edit transaction</h1>

               <div className="min-w-[380px] flex flex-col gap-8">
                  <div className='flex justify-center items-center gap-6'>
                     <Thumb
                        toggle={toggleHandler}
                        control={form.control} />
                  </div>
                  {!toggleHandler ? <FormField
                     control={form.control} name="categories"
                     render={({ field }) => {
                        return <FormItem >
                           <Select
                              onValueChange={field.onChange}>
                              <FormControl>
                                 <SelectTrigger className="pl-2">
                                    <SelectValue placeholder="Select a category" />
                                 </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                 {categories.map(({ name, id }) =>
                                    <SelectItem
                                       value={name}
                                       key={id}
                                    >{name}
                                    </SelectItem>)}
                              </SelectContent>
                              <FormMessage />
                           </Select>
                        </FormItem>
                     }}
                  /> : null}
                  <div className='flex gap-4'>
                     <FormField
                        control={form.control} name="sum"
                        render={({ field }) => {
                           return <FormItem className='w-1/2'>
                              <FormControl>
                                 <Input
                                    {...field}
                                    type="number"
                                    className="p-0 text-center"
                                    defaultValue={initialState.sum}
                                 />
                              </FormControl>
                              <FormMessage />
                           </FormItem>
                        }}
                     />

                     <FormField control={form.control} name="date"
                        render={({ field }) => {
                           return <FormItem className='w-1/2'>
                              <FormControl>
                                 <Input
                                    {...field}
                                    type="date"
                                    placeholder=""
                                    defaultValue={initialState.date}
                                 />
                              </FormControl>
                              <FormMessage />
                           </FormItem>
                        }}
                     />
                  </div>
                  <FormField
                     control={form.control} name="comment"
                     render={({ field }) => {
                        return <FormItem >
                           <FormControl>
                              <Input
                                 {...field}
                                 className="pl-2"
                                 placeholder="Comment" />
                           </FormControl>
                           <FormMessage />
                        </FormItem>
                     }}
                  />
               </div>
               <div className="min-w-[300px] flex flex-col gap-6">
                  <Button type="submit"
                  // disabled={!sumHandler}
                  >Save</Button>
                  <Button variant="secondary"
                     type="button">
                     Cancel
                  </Button>
               </div>
            </form>
         </Form>
      </FormContainer>
   )
}

export default EditForm