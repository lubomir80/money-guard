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
import Thumb from './Thumb'
import categories from "@/app/lib/categoriesData"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/components/ui/select"






function AddForm() {


   const initialState = {
      type: false,
      categories: "",
      sum: 0,
      date: "26/04/2024",
      comment: "",
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
   const sumHandler: boolean = Number(form.watch("sum")) >= 0.01 && true




   return (
      <Form {...form}>
         <form
            className="flex flex-col gap-10 items-center"
            onSubmit={form.handleSubmit(handlerSubmit)}>
            <h1 className='text-3xl'>Add transaction</h1>

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
                        <Select onValueChange={field.onChange}>
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
               >Add</Button>
               <Button variant="secondary"
                  type="button">
                  Cancel
               </Button>
            </div>
         </form>
      </Form>
   )
}

export default AddForm