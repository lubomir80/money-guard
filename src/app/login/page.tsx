import { LockClosedIcon, IdentificationIcon } from '@heroicons/react/24/solid'
import FormContainer from '../components/forms/FormContainer';
import Image from 'next/image';
import LogoImg from "../../../public/logo.png"
import Link from 'next/link';
import OrangeBtn from '../components/OrangeBtn';
import WhiteButton from '../components/WhiteButton';
import OrangeButton from '../components/OrangeButton';

export const metadata = {
   title: "Login",
};


function LoginPage() {
   return (
      <div className='justify-center items-center flex'>
         <FormContainer>
            <form className='flex flex-col gap-12 items-center'>
               <div className='flex flex-col items-center'>
                  <Image src={LogoImg} alt="logo" width={25} height={35} />
                  <h2 className='text-2xl'>Money Guard</h2>
               </div>
               <div className='flex flex-col gap-8 w-[400px]'>
                  <div className='relative'>
                     <IdentificationIcon className='w-5 h-5 fill-white/50 absolute top-[9px] left-0' />
                     <input className='pl-8 w-full bg-transparent border-0 border-b-2 text-stone-50 border-white/50 placeholder:text-white/50
                     focus:border-white'
                        type='email' name='email' placeholder='E-mail' />
                  </div>
                  <div className='relative'>
                     <LockClosedIcon className='w-5 h-5 fill-white/50 absolute top-[9px] left-0' />
                     <input
                        className='pl-8 w-full bg-transparent border-0 border-b-2 text-stone-50 border-white/50 placeholder:text-white/50
                     focus:border-white'
                        type='password' name='password' placeholder='Password' />
                  </div>
               </div>

               <div className='flex flex-col gap-6 items-center w-72'>
                  <OrangeButton>
                     Log in
                  </OrangeButton>
                  <WhiteButton href="/registration" >
                     Register
                  </WhiteButton>
               </div>

            </form>
         </FormContainer>
      </div>
   )
}

export default LoginPage