"use client"
import { LockClosedIcon, IdentificationIcon } from '@heroicons/react/24/solid'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
   Form,
   FormControl,
   FormField,
   FormItem,
   FormMessage
} from "@/components/ui/form"
import { useForm, type FieldValues } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { TSignUpSchema, signUpSchema } from "@/app/lib/type/type"
import FormContainer from "./FormContainer"
import Logo from "../Logo"



function LoginForm() {
   const form = useForm<TSignUpSchema>({
      resolver: zodResolver(signUpSchema),
      defaultValues: {
         email: "",
         password: "",
      }
   })

   const handlerSubmit = (values: FieldValues): void => {
      console.log(values);
      form.reset()
   }


   return (
      <FormContainer>
         <Form {...form}>
            <form
               className="flex flex-col gap-8 items-center"
               onSubmit={form.handleSubmit(handlerSubmit)}>
               <Logo />
               <div className="min-w-[340px] flex flex-col gap-4">
                  <FormField control={form.control} name="email"
                     render={({ field }) => {
                        return <FormItem className='relative'>
                           <IdentificationIcon className='w-5 h-5 fill-white/50 absolute top-4 left-0' />
                           <FormControl>
                              <Input
                                 {...field}
                                 className="" placeholder="Email" />
                           </FormControl>
                           <FormMessage />
                        </FormItem>
                     }}
                  />
                  <FormField
                     control={form.control} name="password"
                     render={({ field }) => {
                        return <FormItem className='relative'>
                           <LockClosedIcon className='w-5 h-5 fill-white/50 absolute top-4 left-0' />
                           <FormControl>
                              <Input
                                 {...field}
                                 className="" placeholder="Password" />
                           </FormControl>
                           <FormMessage />
                        </FormItem>
                     }}
                  />
               </div>
               <div className="min-w-[300px] flex flex-col gap-6">
                  <Button type="submit">Log in</Button>
                  <Button variant="secondary" type="button">
                     Registration
                  </Button>
               </div>
            </form>
         </Form>
      </FormContainer>
   )
}

export default LoginForm