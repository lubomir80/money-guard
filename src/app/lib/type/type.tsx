import *  as z from "zod"



// LOG IN SCHEMA.......................................//
export const signUpSchema =
   z.object({
      email: z.string().email(),
      password: z.string().min(3)
   })

export type TSignUpSchema = z.infer<typeof signUpSchema>


// REGISTRATION IN SCHEMA.......................................//

export const registrationUpSchema =
   z.object({
      name: z.string().min(3),
      email: z.string().email(),
      password: z.string().min(3),
      passwordConfirm: z.string()
   }).refine(data => data.password === data.passwordConfirm, {
      message: "Password must match",
      path: ["passwordConfirm"]
   })

export type TRegistrationUpSchema = z.infer<typeof registrationUpSchema>