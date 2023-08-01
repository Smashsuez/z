import Landing from '@/components/Global/Landing'
import React from 'react'
import Feature from "../components/Global/Feature"
import Services from '@/components/Global/Services'
import List from '@/components/Global/List'
import Footer from '@/components/Global/Footer'
import According from '@/components/Global/According'
import Contact from '@/components/Global/Contact'

export default function Home()  {
  return (
    <>
   
    <div>
      <Landing/>
      <Feature/>
      {/* <List/> */}
      <According/>
      <Contact/>
      <Footer/>
    </div>
    </>
  )
}
