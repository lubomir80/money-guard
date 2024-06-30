import {
   Dialog,
   DialogClose,
   DialogContent,
   DialogTrigger,
} from "@/app/components/ui/dialog"
import React from "react"
import { Button } from "./ui/button"

type Props = {
   children: JSX.Element,

}


function Modal({ children }: Props) {



   return (
      <Dialog>
         <DialogTrigger>Open</DialogTrigger>
         <DialogContent>
            {children}
         </DialogContent>
      </Dialog>
   )
}

export default Modal