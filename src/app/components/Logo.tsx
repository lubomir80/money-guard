import Image from "next/image"
import LogoImg from "../../../public/logo.png"

function Logo() {
   return (
      <div className="flex flex-col gap-1 items-center justify-center">
         <Image src={LogoImg} alt="logo" width={28} height={36} />
         <p className="text-xl">Money Guard</p>
      </div>
   )
}

export default Logo