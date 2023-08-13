import React from 'react'
import styles from "../../app/style/Icon.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook , faInstagram, faWhatsapp  } from "@fortawesome/free-brands-svg-icons";

const Icon = () => {
  return (
    <>
    <div className={styles.icons}>
    <a href="https://www.facebook.com/zagel.eg1?mibextid=2JQ9oc">
    <FontAwesomeIcon icon={faFacebook}   className={styles.icon}/>
    </a>
    <a href="#">
    <FontAwesomeIcon icon={faInstagram} className={styles.icon}/>
    </a>
    <a href="https://wa.me/201012611027">
    <FontAwesomeIcon icon={faWhatsapp}  className={styles.icon}/>
    </a>
    
    </div>
    </>
  )
}

export default Icon