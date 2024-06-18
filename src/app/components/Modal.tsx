import React, { useEffect } from 'react'
import ReactPortal from './ReactPortal'
import CloseIcon from './ui/CloseIcon'



type ModalProps = {
   isOpen: boolean,
   handleClose: () => void,
   children: React.ReactNode,
}
type Propagation = React.MouseEvent<HTMLDivElement, MouseEvent>



function Modal({ isOpen, handleClose, children }: ModalProps) {

   useEffect(() => {
      const closeOnEscapeKey = (e: KeyboardEvent) =>
         e.key === "Escape" ? handleClose() : null

      document.body.addEventListener("keydown", closeOnEscapeKey)

      return () => {
         document.body.removeEventListener("keydown", closeOnEscapeKey)
      }
   }, [handleClose])


   useEffect(() => {
      document.body.style.overflow = "hidden";
      return (): void => {
         document.body.style.overflow = "unset";
      }
   }, [isOpen])

   const handleStopPropagation = (e: Propagation) => {
      e.stopPropagation()
   }


   if (!isOpen) return null

   return (
      <ReactPortal wrapperId='react-portal-modal'>
         <>
            <div
               onClick={handleClose}
               className='fixed w-screen h-screen top-0 left-0 z-40 bg-indigo backdrop-blur-sm '>
               <div
                  onClick={handleStopPropagation}
                  className='fixed rounded-md overflow-hidden 
                  max-w-[533px] m-auto inset-x-0 inset-y-0 max-h-fit
                  bg-white/[.1] px-12 py-14
                  shadow-xl'>
                  <button
                     className='absolute top-6 right-6'
                     onClick={handleClose}>
                     <CloseIcon stroke='#fff' size={6} />
                  </button>
                  {children}
               </div>
            </div>
         </>
      </ReactPortal>
   )
}

export default Modal