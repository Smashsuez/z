"use client"
import React , { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from "../../app/style/Contact.module.css"
import { useState } from 'react';

const Contact = () => {
  const [message, setMessage] = useState('');
    // const [customer, setCustomer] = useState("");  
    // const [email, setEmail] = useState("");
    // const [phone, setPhone] = useState("");
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ph1l7w6', 'template_o4khp7d', form.current, 'MCXYN1narHDCj_5dp')
      .then((result) => { 
        setMessage("Thansks For Choosing Zagel, We Will Resonse As Soon As Possible.");
        e.target.reset();
        console.log(result.text);
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
    <div className={styles.container} id='contact'>
      
      <div className={styles.content}>
        <div className={styles.wrapper}>
                  <form className={styles.form} ref={form} onSubmit={sendEmail}>
                  <h2 className={styles.title}>Feel Free To Contact Us</h2>
                    <div className={styles.item}>
                    <label className={styles.label}>Name</label>
      <input className={styles.input} type="text" placeholder="Name" name="user_name" required/>
                    </div>
      
      
      <div className={styles.item}>
      <label className={styles.label}>Email</label>
      <input className={styles.input} type="email" placeholder="Email" name="user_email" required/>
      </div>
      
      <div className={styles.item}>
      <label className={styles.label}>Phone Number</label>
      <input className={styles.input} type="text"  placeholder="Phone Number"  name="phone_number" required />
      </div>
      
      {/* <input type="text" name="name" placeholder="Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <input type="phone" name="phone" placeholder="Phone Number" required /> */}
        {/* <div className={styles.item}>
        <label className={styles.label}>Business Name</label>
        <input type="businessName" name="businessName" placeholder="Business Name" className={styles.input} required />
        </div>
        
        <div className={styles.item}>
        <label className={styles.label}>Website / Facebook Page</label>
        <input type="page" name="page" placeholder="Website / Facebook Page" className={styles.input} required />
        </div>
        
        <div className={styles.item}>
        <label className={styles.label}>What Is/Are Product You Deliver</label>
        <input type="product" name="product" placeholder="What Is/Are Product You Deliverd" className={styles.input} required />
        </div>
        
        <div className={styles.item}>
        <label className={styles.label}>Estimated Number Of Orders Per Month?</label>
        <input type="orderNumber" name="orderNumber" placeholder="Estimated Number Of Orders Per Month?" className={styles.input} required />
        </div>*/}

        <div className={styles.item}>
        <label className={styles.label}>Message (Optional)</label>
        <input type="text" name="User_Message" placeholder="Message" className={styles.input}  />
        </div> 
        
      <input className={styles.button} type="submit" value="Send" />
      {message && <div className={styles.message}>{message}</div>}
    </form>
    </div>
    <div className={styles.image}></div>
                </div>
  </div>
  );
};

export default Contact;
