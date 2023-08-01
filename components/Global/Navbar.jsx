// 'use server'
// import Image from "next/image";
// import Link from "next/link";
// import React, { useState } from "react";
// import {signIn, signOut, useSession} from "next-auth/react"
// import AuthNav from "./AuthNav";

// const Navbar = () => {
//   const [navActive, setNavActive] = useState(false);
//   const [user, setUser] = useState(false);
  
//   const { data : session, status} = useSession()

// let [allow, setAllow] = useState(status == "authenticated" ? true : false);
//   const toggleNavActive = () => {
//     setNavActive(!navActive);
//   };
//  console.log({status})
// // const X = JSON.stringify(session, null, 2)
// // console.log({X} )


//   return (
//     <header>
//       <nav className={`nav`}>
//         <Link  legacyBehavior href={"/"} > 
//           {/* <Image src="/imgs/[removal.ai]_688263e9-0ee6-4409-9343-98d6d25337bc.png" alt="" width="100" height="100" style={{cursor:"pointer"}}/> */}
//           <a className="logo">ZAGEL</a>
//         </Link>
//         <div className="auth">
//           <AuthNav/>
//         </div>
//         <div onClick={toggleNavActive} className={`menu ${navActive ? "openmenu" : ""}`} >
//           <span className="line-1"></span>
//           <span className="line-2"></span>
//           <span className="line-3"></span>
//         </div>
//         <div className={`nav__menu-list ${navActive ? "active" : ""}`} >
//           <div className="linkContainer">
            
//             <div className={`link ${navActive ? "openmenu" : ""}`}>
//               <div className={`linkInner activeLink`}>
//                 <Link legacyBehavior href={"/"}>
//                   <a>Home</a>
//                 </Link>
//               </div>
//             </div>
//             <div className={`link ${navActive ? "openmenu" : ""}`}>
//               <div className="linkInner">
//                 <Link legacyBehavior href={"/about"}>
//                   <a>About</a>
//                 </Link>
//               </div>
//             </div>
            
//             <div className={`link ${navActive ? "openmenu" : ""}`}>
//               <div className="linkInner">
//                 <Link legacyBehavior href={"/Services"}>
//                   <a>Services</a>
//                 </Link>
//               </div>
//             </div>

//             <div className={`link ${navActive ? "openmenu" : ""}`}>
//               <div className="linkInner">
//                 <Link legacyBehavior href={"/Clients"} >
//                   <a>Clients</a>
//                 </Link>
//               </div>
//             </div>

//             <div className={`link ${navActive ? "openmenu" : ""}`}>
//               <div className="linkInner">
//                 <Link legacyBehavior href={"/Contact"}>
//                   <a>Contact</a>
//                 </Link>
//               </div>
//             </div>

            

//           </div>
//         </div>
//         <div class="switch">
// 	    <input id="language-toggle" class="check-toggle check-toggle-round-flat" type="checkbox"/>
// 	    <label for="language-toggle"></label>
// 	    <span class="on">AR</span>
// 	    <span class="off">EN</span>
//   	</div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;
