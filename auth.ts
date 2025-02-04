import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { authConfig } from "./auth.config";
import { getUser } from "./lib/db/getUser";
import { loginSchema } from "./lib/schemas/authSchemas";

export const { auth, signIn, signOut } = NextAuth({
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

          const isPasswordValid = await bcrypt.compare(
            password,
            user.password!
          );

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
  },
});
