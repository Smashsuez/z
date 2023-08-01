import React from 'react'
import styles from  "../../app/style/Card.module.css"
import Image from 'next/image'
import Link from 'next/link';


const Card = () => {
    return (
    <>
    <Link href="/" passHref>
    <div className={styles.container}>
        {/* <Image className={styles.image} src={list.img} width="50" height="50" alt=""/> */}
        <h1 className={styles.title} style={{ textDecoration: 'none' }}>Shipping</h1>
        <hr className={styles.line}/>
        <p className={styles.desc} style={{ textDecoration: 'none' }}>
        Now you can ship your goods from anywhere to anywhere
        </p>
    </div> 
    </Link>
    </>
    
    )
}

export default Card;