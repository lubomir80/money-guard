"use client"
import { useState } from "react"

const useOpenModalHook = () => {
   const [isOpen, setIsOpen] = useState<boolean>(false)

   const onClose = (): void => {
      setIsOpen(false)
   }

   const onOpen = (): void => {
      setIsOpen(true)
   }

   return { onClose, onOpen, isOpen }
}

export default useOpenModalHook