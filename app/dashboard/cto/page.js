// "use client"
// import React from 'react'
// import getAllUsers from '@/app/api/user/route';
// import { useState } from "react";
// import allUsers from "../page"


// const cto = async () => {
//     const allUsers = await getAllUsers()
  

//   return (
//     <div style={{marginTop:"200px"}}>
//       {allUsers.map((user) =>{
//         return<> <Link key={user.id} href={`/profile/admin/${user.id}`} >
        
//           <p>Email: {user.email}</p>
//           <p>Cash: {user.cash}</p>
        
//       </Link><ProfileUpdate cash={user.cash} id={user.id} phone={user.phone}/></>
//       })}
      
//     </div>
//   )
// }

// export default cto