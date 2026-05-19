import NextAuth, { DefaultSession, NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";
import { createGuest, getGuest } from "./apiGuest";

// extend user
declare module "next-auth" {
  interface Session {
    user: {
      guestId: number;
    } & DefaultSession["user"]
  }
}

const authConfig : NextAuthConfig= {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET
    })],
  callbacks: {

    
    authorized({auth}) {

      return !!auth?.user;
    },

    
    async signIn ({user}) {
      try {
        const existingGuest = await getGuest(user.email!);

        if (!existingGuest) {
          await createGuest({
            email: user.email!, 
            fullName : user.name!
          });
        }
        
        return true;
      }
      catch {
        return false;
      }
    }, 

    async session({session}) {
      const guest = await getGuest(session.user.email);


      if (!guest) throw new Error("Guest not found");
      
      session.user.guestId = guest.id;
      return session; 
    }
    
    
  }, 
  pages: {
    signIn: "/login" ,
  }
};


export const {auth , signIn , signOut , handlers : {GET, POST}} = NextAuth(authConfig);