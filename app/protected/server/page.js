'use server'
import React from 'react'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import OrderList from "../../../components/Global/OrderList"

const ProtectedServerPage = async () => {
  const session = await getServerSession(authOptions)
  return (
    <div>
        Protected Server Page
        {/* <Protected user={session?.user}/> */}
        {/* <OrderList/> */}
    </div>
  )
}

export default ProtectedServerPage