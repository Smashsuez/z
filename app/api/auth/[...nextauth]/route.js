import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials";
import connectDB from "@/utils/database";
import User from "@/models/userModel";
import { sendError } from "next/dist/server/api-utils";
import bcrypt from "bcrypt"
connectDB();

export const authOptions = {
    providers: [
        // GoogleProvider({
        //     clientId: process.env.GOOGLE_CLIENT_ID,
        //     clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        // }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "email", type: "email", required: true },
                password: {  label: "Password", type: "password", required: true },
                phone: {  label: "phone", type: "number", required: true }
            },
            async authorize(credentials, req) {
                const {email, password, phone} = credentials;

                const user = await signInWithCredentials({email, password, phone})
               return user
            }
          })
    ],
    pages: {
        signIn: "/signin",
        error:"/errors"
    },
    callbacks: {
        async signIn({user, account, profile, email, credentials}) {
            if(account.type === 'oauth'){
                return await signInWithOAuth({account, profile})
            } 
            return true;
        },
        async jwt({token, trigger, session}){
            if(trigger === "update") {
                token.user.name = session.name
            }else{
                const user = await getUserByEmail({email: token.email})
            token.user = user
            }
            
            return token;
        },
        async session({session, token}){
            session.user = token.user;
            return session;
        }
    }
    // session: {
    //     strategy: "jwt",
    //   },
    //   jwt: {
    //     secret: process.env.JTW_SECRET,
    //   },
}

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST}

/*...............................................................*/

async function signInWithOAuth({account,profile}){
    const user = await User.findOne({email: profile.email})
    if(user) return true;

    const newUser = new User({
        name: profile.name,
        email: profile.email,
        image: profile.picture,
        providerId : account.provider,
    })
    await newUser.save();
    return true;
}

async function getUserByEmail({email}){
    const user = await User.findOne({email}).select('-password')
    if(!user) throw new Error("Email Does Not Exist")


    return{...user._doc, _id: user._id.toString()}
} 

async function signInWithCredentials({email, password, phone}){
    const user = await User.findOne({email})
    if(!user) throw new Error('email does not exist!')

    const compare = await bcrypt.compare(password, user.password)
    if (!compare) throw new Error("Password Does not match")

    if(phone != user.phone) throw new Error("phone not match")

    return {...user._doc,_id: user._id.toString()}
}

