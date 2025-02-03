import { z } from "zod";

export const registerSchema = z.object({
  name: z
    .string({
      message: " Favor de Ingresar un nombre valido",
    })
    .min(2, {
      message: " Favor de ingresar un nombre con mas de 2 caracteres",
    }),
  email: z
    .string({
      message: "Favor de Ingresar un nombre valido",
    })
    .email({
        message : ' Favor de ingresar un email valido'
    }),
  password : z
    .string().min(6,{message: ' Favor de ingresra un contraseña mayor a 6 caracteres'})


});

export const loginSchema = registerSchema.omit({name : true })
