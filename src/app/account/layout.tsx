import React from 'react'
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

function layout({ children }: Readonly<{ children: React.ReactNode; }>) {
   return (
      <div className=' flex flex-col'>
         <Header />
         <div className="flex-1 grid grid-cols-[1fr_2fr] gap-1">
            <Sidebar />
            {children}
         </div>
      </div>
   )
}

export default layout