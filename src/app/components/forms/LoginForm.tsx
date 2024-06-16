"use client"

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { LockClosedIcon, IdentificationIcon } from '@heroicons/react/24/solid'
import { TSignUpSchema, signUpSchema } from '@/app/utils/type'
import FormContainer from './FormContainer'
import OrangeButton from '../OrangeButton'
import WhiteButton from '../WhiteButton'
import ItemForm from './ItemForm'
import Logo from '../Logo'
import Spinner from '../Spinner'



function LoginForm() {
   const {
      register,
      handleSubmit,
      formState: { errors, isSubmitting },
      reset,
   } = useForm<TSignUpSchema>({ resolver: zodResolver(signUpSchema) });


   const onSubmit = async (data: TSignUpSchema) => {
      await new Promise(resolve => setTimeout(resolve, 1000))
      reset()
   }



   return (
      <FormContainer>
         <form
            onSubmit={handleSubmit(onSubmit)}
            className='flex flex-col gap-12 items-center'>
            <Logo />
            <div className='flex flex-col gap-8 w-[360px]'>
               <ItemForm
                  register={register("email")}
                  placeholder={"E-mail"}
                  type={"email"}
                  errors={errors.email} >
                  <IdentificationIcon />
               </ItemForm>
               <ItemForm
                  register={register("password")}
                  placeholder={"Password"}
                  type={"password"}
                  errors={errors.password}>
                  <LockClosedIcon />
               </ItemForm>
            </div>
            <div className='flex flex-col gap-6 items-center w-72'>
               {!isSubmitting ?
                  <>
                     <OrangeButton>Log in</OrangeButton>
                     <WhiteButton href="/registration" >
                        Register
                     </WhiteButton>
                  </>
                  : <Spinner />}
            </div>
         </form>
      </FormContainer>
   )
}

export default LoginForm