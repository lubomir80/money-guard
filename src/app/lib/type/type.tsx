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


export const addTransactionSchema =
   z.object({
      type: z.boolean(),
      categories: z.string().optional(),
      sum: z.coerce.number().positive(),
      date: z.string(),
      comment: z.string(),
   }).refine(
      (data) => {
         if (data.type) {
            console.log(data.type);
            return !!data.categories
         }
         return true
      },
      {
         message: "Category is required",
         path: ["categories"]
      }
   );

export type TAddTransaction = z.infer<typeof addTransactionSchema>


export const editTransactionSchema =
   z.object({
      type: z.boolean(),
      categories: z.string().optional(),
      sum: z.coerce.number().positive(),
      date: z.string(),
      comment: z.string(),
   }).refine(
      (data) => {
         if (data.type) {
            return !!data.categories
         }
         return true
      },
      {
         message: "Category is required",
         path: ["categories"]
      }
   );

export type TEditTransaction = z.infer<typeof editTransactionSchema>