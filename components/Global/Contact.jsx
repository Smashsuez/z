"use client"
import React from 'react';
import styles from "../../app/style/Contact.module.css"
import { useState } from 'react';

const Contact = () => {
    const [customer, setCustomer] = useState("");  
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Feel Free To Contact Us</h2>
    <div className={styles.content}>
    <div className={styles.wrapper}>
      <form >
        <div className={styles.item}>
          <label className={styles.label}>Full Name</label>
          <input
            placeholder="Full Name"
            type="text"
            className={styles.input}
            value={customer}
            onChange={(e) => setCustomer(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Phone Number</label >
          <input
            type="text"
            placeholder="Phone Number"
            className={styles.input}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Email</label>
          <textarea
            rows={5}
            placeholder="Email"
            type="text"
            className={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit" className={styles.button} >
          Submit
        </button>
      </form>
    </div>
    <div className={styles.image}></div>
    </div>
  </div>
  );
};

export default Contact;
