"use server"
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import User from "../models/userModel";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt" 
import { generateToken, verifyToken } from "@/utils/token";
import sendEmail from "@/utils/sendEmail";

const BASE_URL = process.env.NEXTAUTH_URL;

export async function UpdateUser ({name, phone}){
    const session = await getServerSession(authOptions)
    if (!session) throw new Error("Unauthorizeation")

    try{
        const user = await User.findByIdAndUpdate(session?.user?._id, {
            name, phone
        }, {new: true}).select('-password')
        // if(!user) throw new Error("Email Does Not Exist")
        return{msg: "Update Profile Successfully"}
    } catch(error){
        redirect(`/errors?error=${error}`)
    }
    
}
export async function AdminUpdateUser ({name,id, cash, phone}){
    const session = await getServerSession(authOptions)

    try{
        console.log(1)
        const user = await User.findByIdAndUpdate(id, {
            name, phone
        }, {new: true}).select('-password')
        // if(!user) throw new Error("Email Does Not Exist")
        return{msg: "Update Profile Successfully"}
    } catch(error){
        redirect(`/errors?error=${error}`)
    }
    
}


export async function signUpWithCredentials (data){

    try{
        const user = await User.findOne({email: data.email})
        if(user) throw new Error("Email Already Exists!")
        
        if(data.password){
            data.password = await bcrypt.hash(data.password, 12)
        }

        const token = generateToken({user: data})
        await sendEmail({
            to: data.email,
            url: `${BASE_URL}/verify?token=${token}`,
            text: 'VERFIY EMAIL'
        })
        return{msg: "Please Cheack Your Email"}
    } catch(error){
        redirect(`/errors?error=${error.message}`)
    }
    
}

export async function verfiyWithCredentials (token){

    try{
        const { user } = verifyToken(token)
        console.log({user})
        const userExist = await User.findOne({email: user.email})
        if (userExist) return{msg: "verify Success"}
        const newUser = new User(user)
        await newUser.save();
        console.log({newUser})
        redirect('https://www.myzagel.com/signin')
    } catch(error){ 
        redirect(`/errors?error=${error.message}`)
    }
    
}