'use client'
import { useRouter, useSearchParams } from "next/navigation"


const Errors = () => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const errMsg = searchParams.get('error')
  return (
    <div style={{display: "flex", alignItems: "center", justifyContent: "center", }}>
    <div style={{marginTop:"200px",color:"red"}}>Error: {errMsg}</div>
    <p>Try To Open This Website In System Browser</p>
    <button onClick={() => router.back()}>Try Again</button>
    </div>
  )
}

export default Errors