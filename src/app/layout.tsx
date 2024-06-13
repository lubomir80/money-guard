import "./globals.css";
import poppins from "./utils/fonts";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";


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
         <body className={`${poppins.variable} text-slate-50
         min-h-screen flex flex-col relative
         `}>
            <main className='max-w-7xl mx-auto w-full'>
               {children}
            </main>
         </body>
      </html>
   );
}
