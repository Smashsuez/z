'use server'
import React from 'react'
import Link from 'next/link'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import SignOut from '../Auth/SignOut'
import AuthNav from './AuthNav'
import "../../app/page.module.css"
import NavLink from './NavLink'
import LangNav from './LangToggle'
import Image from 'next/image'

const Header = async () => {
    const session = await getServerSession (authOptions)
  return (
    <header style={{display: "flex", justifyContent: "space-evenly", }}>
       <nav className={`nav`}>
        <Link  legacyBehavior href={"/"} > 
          <a ><Image src="/imgs/logo.jpg" alt="" width="150" height="50" style={{cursor:"pointer"}}/>
          </a>
        </Link>
        <div className="auth">
           <AuthNav/>
         </div>
        <NavLink/>
        {/* <LangNav/> */}
      
        
      </nav>
        {/* {session ? 
        <>
            <Link href="/profile/client">profile (client)</Link>
            <Link href="/profile/server">profile (server)</Link>
            <Link href="/dashboard">admin dashboard</Link>
            <SignOut/>
        </> : <Link href="/signin">signIn</Link>} */}
    </header>
  )
}


export default Header