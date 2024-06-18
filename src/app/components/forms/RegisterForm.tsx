"use client"
import Logo from '../Logo';
import ItemForm from './ItemForm';
import OrangeButton from '../OrangeButton';
import WhiteButton from '../WhiteButton';
import Spinner from '../Spinner';
import FormContainer from './FormContainer';
import { IdentificationIcon, LockClosedIcon, UserIcon } from '@heroicons/react/24/solid';
import { TRegistrationSchema, registrationSchema } from '@/app/utils/type';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';


function RegisterForm() {
   const {
      register,
      handleSubmit,
      formState: { errors, isSubmitting },
      reset,
   } = useForm<TRegistrationSchema>({ resolver: zodResolver(registrationSchema) });


   const onSubmit = async (data: TRegistrationSchema) => {
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
                  register={register("name")}
                  placeholder={"Name"}
                  type={"text"}
                  errors={errors.name} >
                  <UserIcon />
               </ItemForm>
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
               <ItemForm
                  register={register("confirmPassword")}
                  placeholder={"Confirm password"}
                  type={"password"}
                  errors={errors.confirmPassword}>
                  <LockClosedIcon />
               </ItemForm>
            </div>
            <div className='flex flex-col gap-6 items-center w-72'>
               {!isSubmitting ?
                  <>
                     <OrangeButton>Register</OrangeButton>
                     <WhiteButton href="/login" >
                        Log in
                     </WhiteButton>
                  </>
                  : <Spinner />}
            </div>
         </form>
      </FormContainer>
   )
}

export default RegisterForm