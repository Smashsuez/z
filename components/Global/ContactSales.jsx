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
      <input className={styles.input} type="text" placeholder="Name" name="user_name" required/>
      <label className={styles.label}>Email</label>
      <input className={styles.input} type="email" placeholder="Email" name="user_email" required/>
      <label className={styles.label}>Phone Number</label>
      <input className={styles.input} type="text"  placeholder="Phone Number"  name="phone_number" required />
      {/* <input type="text" name="name" placeholder="Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <input type="phone" name="phone" placeholder="Phone Number" required /> */}
        <label className={styles.label}>Business Name</label>
        <input type="businessName" name="businessName" placeholder="Business Name" className={styles.input} required />
        <label className={styles.label}>Website / Facebook Page</label>
        <input type="page" name="page" placeholder="Website / Facebook Page" className={styles.input} required />
        <label className={styles.label}>What Is/Are Product You DeliverdWebsite / Facebook Page</label>
        <input type="product" name="product" placeholder="What Is/Are Product You Deliverd" className={styles.input} required />
        <label className={styles.label}>Order Number</label>
        <input type="orderNumber" name="orderNumber" placeholder="Order Number" className={styles.input} required />
      <input className={styles.button} type="submit" value="Send" />
    </form>
                </div>
    </div>
  );
};

export default ContactSales;
