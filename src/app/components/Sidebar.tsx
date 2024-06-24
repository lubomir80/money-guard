import SideNavigation from './SideNavigation'
import ExchangeRate from './ExchangeRate'
import Balance from './Balance'

export default function Sidebar() {
   return (
      <div className='py-12 border-r border-slate-50/[.4] bg-indigoDark'>
         <SideNavigation />
         <Balance />
         <ExchangeRate />
      </div>
   )
}
