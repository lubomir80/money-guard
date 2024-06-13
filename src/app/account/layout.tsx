import React from 'react'
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

function layout({ children }: Readonly<{ children: React.ReactNode; }>) {
   return (
      <>
         <Header />
         <div className="flex-1 px-8 grid grid-cols-[1fr_2fr] gap-1">
            <Sidebar />
            {children}
         </div>
      </>
   )
}

export default layout