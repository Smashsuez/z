import SignIn from '@/components/Auth/SignIn'
import React from 'react'

const signInPage = ({searchParams: {callbackUrl}}) => {
  return (
    <SignIn callbackUrl={callbackUrl || "/"}/>
  )
}

export default signInPage