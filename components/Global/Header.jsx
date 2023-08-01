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

const Header = async () => {
    const session = await getServerSession (authOptions)
  return (
    <header style={{display: "flex", justifyContent: "space-evenly", }}>
       <nav className={`nav`}>
        <Link  legacyBehavior href={"/"} > 
          {/* <Image src="/imgs/[removal.ai]_688263e9-0ee6-4409-9343-98d6d25337bc.png" alt="" width="100" height="100" style={{cursor:"pointer"}}/> */}
          <a className="logo">ZAGEL</a>
        </Link>
        <div className="auth">
           <AuthNav/>
         </div>
        <NavLink/>
        <LangNav/>
        {/* <div className="auth">
          <AuthNav/>
        </div>
        
        <div className={`nav__menu-list ${navActive ? "active" : ""}`} >
          <div className="linkContainer">
            
            <div className={`link ${navActive ? "openmenu" : ""}`}>
              <div className={`linkInner activeLink`}>
                <Link legacyBehavior href={"/"}>
                  <a>Home</a>
                </Link>
              </div>
            </div>
            <div className={`link ${navActive ? "openmenu" : ""}`}>
              <div className="linkInner">
                <Link legacyBehavior href={"/about"}>
                  <a>About</a>
                </Link>
              </div>
            </div>
            
            <div className={`link ${navActive ? "openmenu" : ""}`}>
              <div className="linkInner">
                <Link legacyBehavior href={"/Services"}>
                  <a>Services</a>
                </Link>
              </div>
            </div>

            <div className={`link ${navActive ? "openmenu" : ""}`}>
              <div className="linkInner">
                <Link legacyBehavior href={"/Clients"} >
                  <a>Clients</a>
                </Link>
              </div>
            </div>

            <div className={`link ${navActive ? "openmenu" : ""}`}>
              <div className="linkInner">
                <Link legacyBehavior href={"/Contact"}>
                  <a>Contact</a>
                </Link>
              </div>
            </div>

            

          </div>
        </div> */}
        
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