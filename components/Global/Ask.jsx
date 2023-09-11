import React from 'react'
import styles from "../../app/style/Ask.module.css"
import Icon from './Icon'

const Ask = () => {
  return (
    <div className={styles.container}>
        <h1>What Makes Us Special</h1>
        <div className={styles.content}>
            <span className={styles.desc}>
            Customer satisfaction is at the core of our business, 
            and we maintain the highest level of service and quality
            </span><br/>
            <button className={styles.button}>
                <a href='/contactUs' className={styles.contact}>Contact Us</a>
            </button>
            <Icon style={{fontSize: "6px"}}/>
        </div>
    </div>
  )
}

export default Ask