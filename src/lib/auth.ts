import type { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import userController from "../controller/user.controller";
import { compare } from "bcryptjs";
import ProcessENV from "./process";
const controlUser = new userController();

const SignInGoogle = async (user: any) => {

};

const SignInFacebook = async (user: any) => {
  searchUserFromDataBase(user);
};

const searchUserFromDataBase = async (user: any) => {
  const userDatabase = (await controlUser.loginEmail(
    user.profile.email
  )) as any;
  if (!userDatabase) {
    // si el usuario no existe, lo registra.
    const newUser = {
      name: user.profile.name,
      email: user.profile.email,
      password: "",
      registeredWith: user.account?.provider,
    } as UserData;
    const userRegister = (await controlUser.registerUser(newUser)) as any;
    // si el usuario no se registra, redirecciona con error.
    if (!userRegister.insertId) return false;
  }
  return true;
};


const SignInCredentials = async (credentials: any) => {
  if (!credentials?.email || !credentials.password) {
    return null;
  }
  const userDatabase = (await controlUser.loginEmail(credentials.email)) as any;
  const comparePassword = await compare(
    credentials.password,
    userDatabase.password
  );
  if (!userDatabase || !comparePassword) {
    return null;
  }

  return {
    id: userDatabase.iduser,
    email: userDatabase.email,
    name: userDatabase.name,
    role: userDatabase.role,
    randomKey: userDatabase.create_time,
  };
};

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        return SignInCredentials(credentials);
      },
    }),
    GoogleProvider({
      clientId: ProcessENV("NEXT_PUBLIC_GOOGLE_CLIENT_ID"),
      clientSecret: ProcessENV("NEXT_PUBLIC_GOOGLE_CLIENT_SECRET"),
    }),
    FacebookProvider({
      clientId: ProcessENV("NEXT_PUBLIC_FACEBOOK_CLIENT_ID"),
      clientSecret: ProcessENV("NEXT_PUBLIC_FACEBOOK_CLIENT_SECRET"),
    }),
  ],
  callbacks: {
    async signIn(user: any) {
      const provider = user.account?.provider;
      if (provider === 'google') {
        // si es un usuario con cuenta no verificada no deja iniciar sesion.
        if (!user.profile?.email_verified) return false;
        searchUserFromDataBase(user);
      }
      if (provider === "facebook") {
        return searchUserFromDataBase(user);
      }

      return true; // Do different verification for other providers that don't have `email_verified`
    },
    session: ({ session, token }) => {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          randomKey: token.randomKey,
        },
      };
    },
    jwt: ({ token, user, account }) => {
      if (user) {
        const u = user as unknown as any;
        return {
          ...token,
          id: u.id,
          role: u.role,
          randomKey: u.randomKey,
          image: u.image,
          provider: account?.provider
        };
      }
      return token;
    },
  },
};
