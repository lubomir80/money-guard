import Link from 'next/link'
import LogoImage from "../../../public/logo.png"
import Image from 'next/image'

type TLinkLogo = {
   link?: boolean
}


function Logo({ link }: TLinkLogo) {

   if (link) {
      return (
         <Link href="/" className='text-lg flex flex-col items-center justify-center' >
            <Image src={LogoImage} alt='logo' width={22} height={18} />
            <span>Money Guard</span>
         </Link>
      )
   }

   return (
      <div className='flex flex-col items-center'>
         <Image src={LogoImage} alt="logo" width={25} height={35} />
         <h2 className='text-2xl'>Money Guard</h2>
      </div>
   )
}

export default Logo