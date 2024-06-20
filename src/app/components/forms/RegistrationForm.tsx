"use client"
import { useRouter } from 'next/navigation'
import { LockClosedIcon, IdentificationIcon, UserIcon } from '@heroicons/react/24/solid'
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
import { TRegistrationUpSchema, registrationUpSchema } from "@/app/lib/type/type"
import FormContainer from "./FormContainer"
import Logo from "../Logo"



function RegistrationForm() {
   const router = useRouter()

   const form = useForm<TRegistrationUpSchema>({
      resolver: zodResolver(registrationUpSchema),
      defaultValues: {
         name: "",
         email: "",
         password: "",
         passwordConfirm: "",
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
               className="flex flex-col gap-10 items-center"
               onSubmit={form.handleSubmit(handlerSubmit)}>
               <Logo />
               <div className="min-w-[380px] flex flex-col gap-8">
                  <FormField
                     control={form.control} name="name"
                     render={({ field }) => {
                        return <FormItem className='relative'>
                           <UserIcon className='w-5 h-5 fill-white/50 absolute top-4 left-0' />
                           <FormControl>
                              <Input
                                 {...field}
                                 className="" placeholder="Name" />
                           </FormControl>
                           <FormMessage />
                        </FormItem>
                     }}
                  />
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
                  <FormField
                     control={form.control} name="passwordConfirm"
                     render={({ field }) => {
                        return <FormItem className='relative'>
                           <LockClosedIcon className='w-5 h-5 fill-white/50 absolute top-4 left-0' />
                           <FormControl>
                              <Input
                                 {...field}
                                 className="" placeholder="Confirm Password" />
                           </FormControl>
                           <FormMessage />
                        </FormItem>
                     }}
                  />

               </div>
               <div className="min-w-[300px] flex flex-col gap-6">
                  <Button type="submit">Registration</Button>
                  <Button
                     onClick={() => router.push('/login')}
                     variant="secondary"
                     type="button">
                     Log In
                  </Button>
               </div>
            </form>
         </Form>
      </FormContainer>
   )
}

export default RegistrationForm