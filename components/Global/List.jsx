"use client"
import React, { useState } from 'react'
import styles from  "../../app/style/Services.module.css"
import Card from './Card'
import Link from 'next/link'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import your icons
import { faTruck , faMotorcycle } from '@fortawesome/free-solid-svg-icons';



const List = () => {
  const [open, setOpen] = useState(false);

  const L = "app/signin"
  return (
    <div className={styles.container} id='menu'>
        <div className={styles.heading}>
          <span className={styles.title}>Our Services</span>
        </div>
        <div className={styles.wrapper} 
    //     data-aos="fade-right"
    //  data-aos-offset="300"
    //  data-aos-easing="ease-in"
     >
    <div className={styles.cardContainer} onClick={() => setOpen(true)} >
        {/* <Image className={styles.image} src={list.img} width="50" height="50" alt=""/> */}
        <FontAwesomeIcon icon={faTruck} className={styles.image}  />
        <h1 className={styles.cardtitle} style={{ textDecoration: 'none' }}>Shipping</h1>
        <hr className={styles.line}/>
        <p className={styles.desc} style={{ textDecoration: 'none' }}>
        Now you can ship your goods from anywhere to anywhere
        </p>
    </div> 
    
    <div className={styles.cardContainerTwo} >
        {/* <Image className={styles.image} src={list.img} width="50" height="50" alt=""/> */}
        <FontAwesomeIcon icon={faMotorcycle} className={styles.image}/>
        <h1 className={styles.cardtitle} style={{ textDecoration: 'none' }}>GO Zagel</h1>
        <hr className={styles.line}/>
        <p className={styles.desc} style={{ textDecoration: 'none' }}>
        Now you can order your needs from anywhere anytime.
        </p>
    </div> 
    
      
        </div> 
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
      <script>
  AOS.init();
</script>
{open && <OrderDetail setOpen={setOpen}/>} 
{/* {open && <Detail/>} */}
    </div>
  )
}

export default List;