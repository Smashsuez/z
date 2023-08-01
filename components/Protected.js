"use client"
import { useSession } from "next-auth/react"

const Protected = ({user}) => {
    const {data:session} = useSession()
  return (
    <p>name: {session?.user.name || user?.name}</p>
  )
}

export default Protected