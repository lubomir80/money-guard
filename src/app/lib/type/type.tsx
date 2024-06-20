import *  as z from "zod"



// LOG IN SCHEMA.......................................//
export const signUpSchema =
   z.object({
      email: z.string().email(),
      password: z.string().min(3)
   })

export type TSignUpSchema = z.infer<typeof signUpSchema>


// LOG IN SCHEMA.......................................//