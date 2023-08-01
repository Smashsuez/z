"use client"
import React from 'react';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import UpdataForm from '../Profile/UpdataForm';
import Button from '../Profile/Button';
import styles from "../../app/style/SignIn.module.css"
const SignUp = ({ callbackUrl }) => {
  async function handleCredentialsLogin(formData){
    const email = formData.get('email')
    const password = formData.get('password')
    const phone = formData.get('phone')
    await signIn('credentials', {email, password, phone, callbackUrl})
  }

  return (
    <div className={styles.container}> {/* Apply the CSS module class */}
      <div className={styles.form}> {/* Apply the CSS module class */}
        <h2>Sign Up</h2>
        <UpdataForm action={handleCredentialsLogin}>
          <input type="email" name="email" placeholder="Email" required />
          <input type="password" name="password" placeholder="Password" required />
          <input type="phone" name="phone" placeholder="Phone Number" required />
          <Button value="Sign Up" />
        </UpdataForm>
      </div>
      <div className={styles.form}> {/* Apply the CSS module class */}
        <p>Don't have an account? <Link href="/signup">Sign Up</Link></p>
      </div>
    </div>
  );
};

export default SignUp;
