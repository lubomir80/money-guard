export async function getData() {
   const res = await fetch("https://64786e26362560649a2dc092.mockapi.io/data")
   const data = await res.json()

   if (!res.ok) throw new Error("Data fetch failed")

   return data
} 