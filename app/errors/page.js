'use client'
import { useRouter, useSearchParams } from "next/navigation"


const Errors = () => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const errMsg = searchParams.get('error')
  return (
    <>
    <div style={{marginTop:"200px",color:"red"}}>Error: {errMsg}</div>
    <button onClick={() => router.back()}>Try Again</button>
    </>
  )
}

export default Errors