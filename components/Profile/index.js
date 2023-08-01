"use client"

import ProfileCard from "./ProfileCard"
import ProfileUpdate from "./ProfileUpdate"
import { useSession } from "next-auth/react"
import OrderList from "../../components/Global/OrderList.jsx"
import Link from "next/link"
import HistoryComponent from "./HistoryComponent"
import styles from "../../app/style/ProfileComponent.module.css"

const ProfileComponent = ({user}) => {
  const {data: session, update} = useSession()
  const email = session?.user?.email
  return (
    <div className={styles.container}>
      <ProfileCard user={session?.user || user}/>
      <ProfileUpdate update={update}/>
      {session?.user?.email && <HistoryComponent email={email}/>}
      <hr/>
    </div>
  )
}

export default ProfileComponent