import User from "@/app/(models)/User";
import GoogleProvider from "next-auth/providers/google";
import { getUser } from "@/app/api/user/route";

export const options = {
  providers: [
    GoogleProvider({
      profile(profile) {
        return {
          ...profile,
          id: profile.sub,
        };
      },
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.picture = user.picture;
      return token;
    },
    async session({ session, token }) {
      if (session?.user) session.user.image = token.picture;
      return session;
    },
<<<<<<< Updated upstream
    async signIn({ user, account }) {
      if (account.provider === "google") {
        const { name, email } = user;
        console.log(user);
=======
<<<<<<< Updated upstream
=======
    async signIn({ user, account }) {
      if (account.provider === "google") {
        const { name, email } = user;
>>>>>>> Stashed changes
        const userExists = await User.findOne({ email });
        if (!userExists) {
          try {
            const res = await fetch("http://localhost:3000/api/user", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name,
                email,
              }),
            });
            if (res.ok) return user;
          } catch (err) {}
<<<<<<< Updated upstream
        } else return user;
      }
    },
=======
        } else {
          console.log(await getUser(email))
          return user;
        }
      }
    },
>>>>>>> Stashed changes
>>>>>>> Stashed changes
  },
  secret: process.env.NEXTAUTH_SECRET,
};
