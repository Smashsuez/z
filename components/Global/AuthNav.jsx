"use client"
import React, {useState} from 'react'
import {signIn, signOut, useSession} from "next-auth/react"
import Link from 'next/link'
const AuthNav = () => {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Hi {session.user.name} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      <Link href="/../signup" className='bounce2'>Start Now</Link><br />
      <Link href="/../signin">Sign In</Link>
      
    </>
  )
}

export default AuthNav