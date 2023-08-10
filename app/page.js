import Landing from '@/components/Global/Landing'
import React from 'react'
import Feature from "../components/Global/Feature"
import Services from '@/components/Global/Services'
import List from '@/components/Global/List'
import Footer from '@/components/Global/Footer'
import According from '@/components/Global/According'
import Contact from '@/components/Global/Contact'
import X from '@/components/Global/X'
import ContactSales from '@/components/Global/ContactSales'

export default function Home()  {
  return (
    <>
   
    <div>
      <Landing/>
      <Feature/>
      <List/>
      <X/>
      <ContactSales/>
      <According/>
      <Contact/>
      <Footer/>
    </div>
    </>
  )
}
