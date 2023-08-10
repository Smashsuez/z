"use client"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from "../../app/style/ContactSales.module.css"
import { ST } from 'next/dist/shared/lib/utils';

const ContactSales = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ph1l7w6', 'template_o4khp7d', form.current, 'MCXYN1narHDCj_5dp')
      .then((result) => {
        console.log(result.text);
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
    <div className={styles.container}>
       <div className={styles.title}>
                    Contact Sales
                </div>
                <div className={styles.ContentContainer}>
                  <form className={styles.form} ref={form} onSubmit={sendEmail}>
      <label className={styles.label}>Name</label>
      <input className={styles.input} type="text" name="user_name" />
      <label className={styles.label}>Email</label>
      <input className={styles.input} type="email" name="user_email" />
      <label className={styles.label}>Phone Number</label>
      <input className={styles.input} type="text" name="phone_number" />
      <input className={styles.button} type="submit" value="Send" />
    </form>
                </div>
    </div>
  );
};

export default ContactSales;
