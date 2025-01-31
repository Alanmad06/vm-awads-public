import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { z } from "zod";
import bcrypt from "bcryptjs";
import { getUser } from "./lib/db/db";
import { authConfig } from "./auth.config";



export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const parsedCrendials = z
          .object({ email: z.string().email(), password: z.string().min(2) })
          .safeParse(credentials);

          if(!parsedCrendials.success){
            return null
          }

          const {email , password} = parsedCrendials.data;
          try{
          const user = await getUser(email);

          if(!user) {
            console.error("Usuario no encontrado");
            return null;
          }
          console.log('USERREE1231313',user)
          const isPasswordValid = await bcrypt.compare(password, user.password!);
          console.log('PASWW',password)
          if (!isPasswordValid) {
            console.error("Contraseña incorrecta");
            return null;
          }

          console.log('USERREE',user)
          return user
  
        }catch (error) {
          console.error("Error durante la autorización:", error);
          return null;
        }
      },
    }),
  ],
});
