import React from 'react'
import styles from "../../app/style/Footer.module.css"
import Icon from './Icon'


const Footer = () => {
  return (
    <div className={styles.footer}>
    <div className={styles.container}>
      <div className={styles.upper}>
        <div className={styles.left}>
          {/* The <p className={styles.pColor}>Best Agency</p> for Your Businnes */}
          GLOBAL CARRIER NETWORK For <p className={styles.pColor}>Global Business </p>Opportunity
        </div>
        <div className={styles.right}>
          <ul className={styles.ul}>
           <li><a className={styles.link}  href="/">Home</a></li>
                        <li><a className={styles.link} href="/#menu">Services</a></li>
                        <li><a className={styles.link}  href="/#according">Feq Question</a></li>
                        <li><a className={styles.link}  href="/contactUs">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className={styles.bottom}>
        <Icon/>
      </div>
      
    </div>
    </div>
  )
}

export default Footer