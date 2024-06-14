import Link from 'next/link'
import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/solid'
import LogoImage from "../../../public/logo.png"
import Image from 'next/image'

function Header() {
   return (
      <header className='px-8 py-6 bg-dark'>
         <div className='flex justify-between items-center max-w-7xl mx-auto'>
            <Link href="/" className='text-lg flex flex-col items-center justify-center' >
               <Image src={LogoImage} alt='logo' width={22} height={18} />
               <span>Money Guard</span>
            </Link>

            <div className='flex gap-3'>
               <div>User</div> |
               <Link href="/login" className='flex items-center gap-2'>
                  <ArrowRightOnRectangleIcon className='h-5 w-5 text-primary-600' />
                  Exit
               </Link>
            </div>
         </div>
      </header>
   )
}

export default Header