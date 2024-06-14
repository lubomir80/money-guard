"use client"
import Link from 'next/link'
import { HomeIcon, ChartBarSquareIcon } from '@heroicons/react/24/solid'
import { usePathname } from 'next/navigation'
import { navLinkType } from '../utils/type'


const navLinks: navLinkType[] = [
   {
      name: "Home",
      href: "/account",
      icon: <HomeIcon className="h-5 w-5 text-primary-600" />,
   },
   {
      name: "Statistics",
      href: "/account/statistics",
      icon: <ChartBarSquareIcon className="h-5 w-5 text-primary-600" />,
   },
]


function SideNavigation() {
   const pathname = usePathname();


   return (
      <nav className='pb-8'>
         <ul>
            {navLinks.map(({ name, href, icon }) => {
               const activeLink = href === pathname ? "rounded-md bg-slate-50/[.1]" : " "
               const activeIcon = href === pathname ? "bg-indigo-800" : " "

               return (
                  <li className={`${activeLink} p-4 text-xl`}>
                     <Link href={href} className='flex items-center gap-4'>
                        <span className={`${activeIcon} rounded-sm p-2`} >{icon}</span>
                        <span>{name}</span>
                     </Link>
                  </li>)
            })
            }
         </ul>
      </nav>
   )
}

export default SideNavigation