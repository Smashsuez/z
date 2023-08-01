'use client'
import React, {useState} from 'react'
import Link from 'next/link';

const NavLink = () => {
    const [navActive, setNavActive] = useState(false);
    const toggleNavActive = () => {
            setNavActive(!navActive);
            };
  return (
    
        <>
        <div onClick={toggleNavActive} className={`menu ${navActive ? "openmenu" : ""}`} >
            <span className="line-1"></span>
            <span className="line-2"></span>
            <span className="line-3"></span>
         </div>
        <div className={`nav__menu-list ${navActive ? "active" : ""}`} >
          <div className="linkContainer">
            
            <div className={`link ${navActive ? "openmenu" : ""}`}>
              <div className={`linkInner activeLink`}>
                <Link legacyBehavior href={"/profile/server"}>
                  <a>Profile</a>
                </Link>
              </div>
            </div>
            <div className={`link ${navActive ? "openmenu" : ""}`}>
              <div className={`linkInner `}>
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
                <Link legacyBehavior href={"/profile/server"}>
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
        </div> 
        </>
  )
}

export default NavLink