export default function Template({ children }: { children: React.ReactNode }) {
   return <div
      className="animate-appear ease-in grid "
   >{children}</div>
}