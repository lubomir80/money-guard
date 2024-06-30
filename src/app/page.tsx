

export const metadata = {
   title: "Your account",
};

export default function Home() {
   const user: boolean = false

   if (!user) console.log("unlogged");


   return (
      <div className="transition-all py-12 px-12">
         Home
      </div>
   );
}
