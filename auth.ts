import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { authConfig } from "./auth.config";
import { getUser } from "./lib/db/getUser";
import { loginSchema } from "./lib/schemas/authSchemas";
import Google from "next-auth/providers/google";
import { Pool } from "pg";
import { createUser } from "./lib/db/createUser";



export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const parsedCrendials = loginSchema.safeParse(credentials);
        if (!parsedCrendials.success) {
          return null;
        }

        const { email, password } = parsedCrendials.data;
        try {
          const user = await getUser(email);
          if (!user) {
            console.error("Usuario no encontrado");
            return null;
          }

          const isPasswordValid = await bcrypt.compare(password, user.password!);
          if (!isPasswordValid) {
            console.error("Contraseña incorrecta");
            return null;
          }

          return { id: user.id, email: user.email, name: user.name };
        } catch (error) {
          console.error("Error durante la autorización:", error);
          return null;
        }
      },
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    error: "/error",
  },
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === "google") {
        try {
          const isUser = !!await getUser(user.email!);
          if(!isUser)  await createUser(user.email!, "")
       
        
        } catch (error) {
          console.error("Error guardando usuario de Google:", error);
          return false; // Evita que el usuario inicie sesión si hay un error
        }
      }
      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id as string;
      return session;
    },
  },
});
