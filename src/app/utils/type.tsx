import { z } from "zod";
import { InputHTMLAttributes } from "react";
import type { FieldError } from "react-hook-form"


// Login Schema...........................................//

const passwordValidation = new RegExp(
   /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
);

export const signUpSchema = z.object({
   email: z.string().email(),
   password: z.string()
      .min(8, "Password must be at least 8 characters")
      .max(32, 'The password must be a maximum 32 characters')
      .regex(passwordValidation, {
         message: "Requires at least 1 uppercase letter, 1 number, and 1 symbol"
      })
})

export type TSignUpSchema = z.infer<typeof signUpSchema>
// ......................................................//



// Input Form Type......................................// 
export type TItemForm = {
   children: JSX.Element,
   register: InputHTMLAttributes<HTMLInputElement>,
   placeholder: string,
   errors?: FieldError,
   type: string
}
// ......................................................//


export type childrenProps = {
   children: React.ReactNode;
}

export type navLinkType = {
   name: string,
   href: string,
   icon: React.ReactNode
}