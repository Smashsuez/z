import { verfiyWithCredentials } from "@/actions/authActions"


const verifyPage = async ({searchParams: {token}}) => {
  
const res = await verfiyWithCredentials(token)


  return (
    <div style={{marginTop:"200px"}}>{res?.msg}</div>
  )
}

export default verifyPage