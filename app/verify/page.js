import { verfiyWithCredentials } from "@/actions/authActions"
import Link from "next/link"


const verifyPage = async ({searchParams: {token}}) => {
  console.log(token)
const res = await verfiyWithCredentials(token)


  return (
    <div style={{height: "100vh",display: "flex",flexDirection: "column",alignItems: "center", justifyContent: "center", }}>
      <div>
      {res?.msg}
      </div>
      <div>
        <Link href={"/../signin"}>
          <button style={{padding: "10px", backgroundColor: "#006dda",borderRadius: "10px"}}>signIn Page</button>
        </Link>
        
      </div>
    </div>
  )
}

export default verifyPage