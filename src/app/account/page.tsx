"use client"

import Modal from "../components/Modal"
import WhiteButton from "../components/WhiteButton"
import useOpenModalHook from "../hook/useOpenModalHook"


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
   const { onOpen, onClose, isOpen } = useOpenModalHook()

   return (
      <div className='py-12 px-12 '>
         <WhiteButton onClick={onOpen}>
            Open Modal
         </WhiteButton>

         {isOpen &&
            (<Modal
               handleClose={onClose}
               isOpen={isOpen}>
               Test
            </Modal>)
         }
      </div>
   )
}

export default AccountPage