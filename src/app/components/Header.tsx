import Link from 'next/link'
import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/solid'
import Logo from './Logo'

function Header() {
   return (
      <header className='px-8 py-6 bg-dark'>
         <div className='flex justify-between items-center max-w-7xl mx-auto'>
            <Logo link={true} />

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