import { z } from "zod";

export const registerSchema = z.object({

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

export const loginSchema = registerSchema
