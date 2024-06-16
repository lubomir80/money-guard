"use client"
import React from 'react'


interface ITableData {
   data: string,
   type: boolean,
   category: string,
   comment: string
   sum: number
}

const tableData: ITableData[] = [
   {
      data: "04.01.23",
      type: false,
      category: "04.01.23",
      comment: "04.01.23",
      sum: 300
   },
   {
      data: "05.01.23",
      type: true,
      category: "Income",
      comment: "January bonus",
      sum: 8000
   },
   {
      data: "07.01.23",
      type: false,
      category: "Car",
      comment: "Oil",
      sum: 1000
   },


]




function AccountPage() {
   return (
      <div className='py-12 px-12 '>
         Account
      </div>
   )
}

export default AccountPage