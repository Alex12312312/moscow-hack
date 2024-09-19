import { NextAuthOptions } from 'next-auth'
import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials';
import { AuthDataValidator, objectToAuthDataMap } from '@telegram-auth/server';
import axios from 'axios';
import https from 'https';
import { cookies } from 'next/headers';

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID!
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET!

const authOptions: NextAuthOptions = {
    session: {
        strategy: 'jwt',
    },
    debug: true,
    secret: process.env.JWT_SECRET,
    providers: [
        GoogleProvider({
            clientId: GOOGLE_CLIENT_ID,
            clientSecret: GOOGLE_CLIENT_SECRET
        }),
        CredentialsProvider({
            id: 'myAuth',
            name: 'myAuth',
            credentials: {},
            async authorize(credentials, req) {
                const httpsAgent = new https.Agent({ rejectUnauthorized: false });

                const res = await axios.post(`${process.env.BASE_API_URL}/auth/login`, req.body, {
                    httpAgent: httpsAgent
                })

                const response = res?.data as {
                    token: string
                }

                const cookieStore = cookies()
                cookieStore.set('access_token' as any, response.token as any, { secure: true } as any)

                const innerRes = await axios.get(`${process.env.BASE_API_URL}/user/me`, {
                    headers: {
                        accept: 'application/json',
                        Authorization: `Bearer ${response.token}`
                    }
                })

                // @ts-ignore
                const responseUserMe = innerRes as {
                    id: string,
                    email: string,
                    avatarUrl: string,
                };

                return {
                    id: responseUserMe.id,
                    email: responseUserMe.email,
                    name: '',
                    image: responseUserMe.avatarUrl,
                };
            },
        }),
        CredentialsProvider({
            id: 'telegram',
            name: 'telegram',
            credentials: {
                email: { label: 'Email', type: 'text', placeholder: 'test@test.com' },
                password: { label: 'Password', type: 'password' }
            },
            async authorize(credentials, req) {
                const validator = new AuthDataValidator({
                    botToken: `${process.env.BOT_TOKEN}`,
                });

                const data = objectToAuthDataMap(req.query || {});
                const user = await validator.validate(data);

                if (user.id && user.first_name) {
                    // try {
                    //     await createUserOrUpdate(user);
                    // } catch {
                    //     console.log(
                    //         "Something went wrong while creating the user."
                    //     );
                    // }

                    return {
                        id: user.id.toString(),
                        email: user.id.toString(),
                        name: [user.first_name, user.last_name || ''].join(' '),
                        image: user.photo_url,
                    };
                }
                return null;
            },
        }),
    ],
    callbacks: {
        async signIn({ account, profile }) {
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
export { handler as GET, handler as POST }