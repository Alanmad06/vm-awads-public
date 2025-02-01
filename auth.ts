import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { z } from "zod";
import bcrypt from "bcryptjs";

import { authConfig } from "./auth.config";
import { getUser } from "./lib/db/getUser";
import { getVotes } from "./lib/db/getVotes";



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

          const votes = await getVotes(user.id)
          console.log('votes' , votes)
         
          const isPasswordValid = await bcrypt.compare(password, user.password!);
         
          if (!isPasswordValid) {
            console.error("Contraseña incorrecta");
            return null;
          }

          
          return {id: user.id, email: user.email};
  
        }catch (error) {
          console.error("Error durante la autorización:", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.id = user.id; 
      }
      return token;
    },
     session({ session, token }) {
      
      session.user.id = token.id as string;
      
      return session;
    },
  }

});
