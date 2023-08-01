'use client'
import OrderList from '@/components/Global/OrderList'
import React from 'react'



const ProtectedClientPage = () => {
  return(
    <div style={{margin: "200px"}}>
      <OrderList/>
    </div>
  )
  
}

export default ProtectedClientPage