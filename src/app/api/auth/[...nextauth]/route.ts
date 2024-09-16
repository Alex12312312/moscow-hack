import {NextAuthOptions} from 'next-auth'
import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google'

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID!
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET!

const authOptions: NextAuthOptions = {
    session: {
        strategy: 'jwt',
    },
    secret: process.env.JWT_SECRET,
    providers: [
        GoogleProvider({
            clientId: GOOGLE_CLIENT_ID,
            clientSecret: GOOGLE_CLIENT_SECRET
        }),
    ],
    callbacks: {
        async signIn({account, profile}) {
            if (!profile?.email) {
                throw new Error('No profile');
            }

            const user = {
                email: profile.email,
                name: profile.name,
                image: profile.image
            };

            return true;
        },
        async session({ session, token, user }) {
            // @ts-ignore
            session.user.id = token.id;
            // @ts-ignore
            session.user.accessToken = token.accessToken;
            return session;
        },
        async jwt({ token, user, account, profile, isNewUser }) {
            if (user) {
                // @ts-ignore
                token.id = user.id;
            }
            if (account) {
                // @ts-ignore
                token.accessToken = account.access_token;
            }
            return token;
        },
    }
}

const handler = NextAuth(authOptions);
export {handler as GET, handler as POST}