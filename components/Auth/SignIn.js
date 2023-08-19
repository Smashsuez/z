"use client"
import React, {useState} from 'react';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import UpdataForm from '../Profile/UpdataForm';
import Button from '../Profile/Button';
import styles from "../../app/style/SignIn.module.css"
const SignIn = ({ callbackUrl }) => {
  const [message, setMessage] = useState('');

  async function handleCredentialsLogin(formData){
    const email = formData.get('email')
    const password = formData.get('password')
    const phone = formData.get('phone')
    try{
      const res = await signIn('credentials', {email, password, phone, callbackUrl})
      setMessage(res.msg)
    }
    catch (error) {
      setMessage('Please Try Again Later');
    }
    
  }

  return (
    <div className={styles.container}> {/* Apply the CSS module class */}
      <div className={styles.form}> {/* Apply the CSS module class */}
        <h2>Sign In</h2>
        <UpdataForm action={handleCredentialsLogin}>
          <input type="email" name="email" placeholder="Email" required />
          <input type="password" name="password" placeholder="Password" required />
          <input type="phone" name="phone" placeholder="Phone Number" required />
          {message && <p>{message}</p>}
          <Button value="Sign In" />
        </UpdataForm>
      </div>
      <div className={styles.form}> {/* Apply the CSS module class */}
        <p>Don't have an account? <Link href="/signup">Sign Up</Link></p>
      </div>
    </div>
  );
};

export default SignIn;
