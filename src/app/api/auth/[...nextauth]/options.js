import GoogleProvider from "next-auth/providers/google";

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
      if(user) token.picture = user.picture
      return token;
    },
    async session({ session, token }) {
      if (session?.user) session.user.image = token.picture;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
