import "./globals.css";
import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
   subsets: ["latin"],
   display: "swap"
});

export const metadata = {
   title: {
      template: '%s / Money Guard',
      default: 'Welcome / Money Guard',
   },
   description: 'Count your money.'
};

export default function RootLayout({
   children,
}: Readonly<{ children: React.ReactNode; }>) {


   return (
      <html lang="en">
         <body className={`${josefin.className} text-slate-50
         min-h-screen flex relative`}>
            <main className='max-w-7xl mx-auto w-full grid'>
               {children}
            </main>
         </body>
      </html>
   );
}
