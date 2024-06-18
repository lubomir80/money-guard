

type PropsIcon = {
   className?: string,
   stroke?: string,
   fill?: string,
   strokeWidth?: number | string,
   size?: number | string
}


function CloseIcon({
   className,
   stroke,
   fill,
   strokeWidth = 2,
   size = 6 }: PropsIcon) {


   return (
      <svg xmlns="http://www.w3.org/2000/svg"
         fill={fill}
         viewBox="0 0 24 24"
         strokeWidth={strokeWidth}
         stroke={stroke}
         className={`${className} size-${size}
         hover:stroke-stone-300
         transition-colors
         `}>
         <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
      </svg>
   )
}

export default CloseIcon