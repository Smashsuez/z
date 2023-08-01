"use client"
import { useSession } from "next-auth/react"

export default function addOrder(){
    const {data: session, update} = useSession()
    if(session?.user.state == "Personal"){
    return(
        <form style={{margin: "200px"}}>
            <input
            type="text"
            placeholder="Enter your order here..." 
            />
            <input
            type="text"
            placeholder="Enter your order desc here..." 
            />
            <button>
                Add Topic
            </button>
        </form>
    )}
    if(session?.user.state == "z"){

    return(
        <p style={{margin: "200px"}}>kos</p>
    )}
}