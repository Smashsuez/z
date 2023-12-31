'use client'
import { useRouter, useSearchParams } from "next/navigation"


const Errors = () => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const errMsg = searchParams.get('error')
  return (
    <div style={{height: "100vh",display: "flex", alignItems: "center",flexDirection: "column", justifyContent: "center", }}>
    <div style={{marginTop:"200px",color:"red"}}>Error: {errMsg}</div>
    <p>Try To Open This Website In System Browser Or To Verify Your Acount Again </p>
    <button onClick={() => router.back()}>Try Again</button>
    </div>
  )
}

export default Errors