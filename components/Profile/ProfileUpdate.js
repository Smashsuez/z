"use client"
import { AdminUpdateUser, UpdateUser } from "@/actions/authActions";
import { useState } from "react";
import UpdataForm from "./UpdataForm"
import Button from "./Button";
const ProfileUpdate = ({update, id, cash}) => {
  const [open, setOpen] = useState(false);
    async function handleUpdataProfile(formData){
        const name = formData.get('name');
        const phone = formData.get('phone');
        if(update){
          update({name})
        }
        const res =  await UpdateUser({name, id,phone})
       
    }
  return (
    <div>
        <p onClick={() => setOpen(true)}> Update Profile</p>
        {open && <UpdataForm action={handleUpdataProfile}>
            <input type="text" name="name" placeholder="Name" required/>
            <input type="number" name="phone" placeholder="phone" required/>
            <Button value="Update Profile"/>
            <p onClick={() => setOpen(false)}>Close</p>
        </UpdataForm>}

        
    </div>
  )
}

export default ProfileUpdate