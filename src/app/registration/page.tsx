import { LockClosedIcon, IdentificationIcon, UserIcon } from '@heroicons/react/24/solid'
import FormContainer from '../components/forms/FormContainer';
import Image from 'next/image';
import LogoImg from "../../../public/logo.png"
import WhiteButton from '../components/WhiteButton';
import OrangeButton from '../components/OrangeButton';
import RegistrationForm from '../components/forms/RegistrationForm';

export const metadata = {
   title: "Create account",
};

function RegistrationPage() {
   return (
      <div className='justify-center items-center flex'>
         {/* <FormContainer>
            <form className='flex flex-col gap-12 items-center'>
               <div className='flex flex-col items-center'>
                  <Image src={LogoImg} alt="logo" width={25} height={35} />
                  <h2 className='text-2xl'>Money Guard</h2>
               </div>
               <div className='flex flex-col gap-8 w-[400px]'>
                  <div className='relative'>
                     <UserIcon className='w-5 h-5 fill-white/50 absolute top-2 left-0' />
                     <input className={`pl-8 p-2 w-full bg-transparent border-0 border-b-2 text-stone-50 border-white/50 placeholder:text-white/50
                     focus:outline-none focus:shadow-outline focus:border-white  inputDarkModeOverride`}
                        type='text' name='name' placeholder='Name' />
                  </div>
                  <div className='relative'>
                     <IdentificationIcon className='w-5 h-5 fill-white/50 absolute top-2 left-0' />
                     <input className={`pl-8 p-2 w-full bg-transparent border-0 border-b-2 text-stone-50 border-white/50 placeholder:text-white/50
                     focus:outline-none focus:shadow-outline focus:border-white  inputDarkModeOverride`}
                        type='email' name='email' placeholder='E-mail' />
                  </div>
                  <div className='relative'>
                     <LockClosedIcon className='w-5 h-5 fill-white/50 absolute top-2 left-0' />
                     <input
                        className={`pl-8 p-2 w-full bg-transparent border-0 border-b-2 text-stone-50 border-white/50 placeholder:text-white/50
                     focus:outline-none focus:shadow-outline focus:border-white  inputDarkModeOverride`}
                        type='password' name='password' placeholder='Password' />
                  </div>
                  <div className='relative'>
                     <LockClosedIcon className='w-5 h-5 fill-white/50 absolute top-2 left-0' />
                     <input
                        className={`pl-8 p-2 w-full bg-transparent border-0 border-b-2 text-stone-50 border-white/50 placeholder:text-white/50
                        focus:outline-none focus:shadow-outline focus:border-white  inputDarkModeOverride`}
                        type='password' name='passwordConfirm' placeholder='Confirm password' />
                  </div>

               </div>

               <div className='flex flex-col gap-6 items-center w-72'>
                  <OrangeButton>
                     Register
                  </OrangeButton>
                  <WhiteButton
                     href="/login" >
                     Log In
                  </WhiteButton>
               </div>

            </form>
         </FormContainer> */}
         <RegistrationForm />
      </div>
   )
}

export default RegistrationPage