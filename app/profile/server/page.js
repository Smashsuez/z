'use server'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import ProfileComponent from '@/components/Profile'
import { getServerSession } from 'next-auth/next'

const ProfileServerPage = async () => {
  const session = await getServerSession(authOptions)
  return (
    <div>
      <ProfileComponent user={session?.user}/>
      
    </div>
  )
}

export default ProfileServerPage