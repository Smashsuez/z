import { verfiyWithCredentials } from "@/actions/authActions"
import Link from "next/link"


const verifyPage = async ({searchParams: {token}}) => {
  
const res = await verfiyWithCredentials(token)


  return (
    <div style={{display: "flex", alignItems: "center", justifyContent: "center", }}>
      <div>
      {res?.msg}
      </div>
      <div>
        <Link href={"/../signin"}>
          <button>Try Again</button>
        </Link>
        
      </div>
    </div>
  )
}

export default verifyPage