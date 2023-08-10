import React from 'react'
import styles from "../../app/style/Feature.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSackDollar, faTruck, faPeopleCarryBox, faBoxArchive,faHourglassHalf} from '@fortawesome/free-solid-svg-icons';

const Icon = () => {
  return (
    <>
    <div className={styles.icons}>
    <span  className={styles.item}>
    <FontAwesomeIcon icon={faSackDollar} className={styles.icon} />
    <div className={styles.text}>Cash on Delivery</div>
    </span>
    <span className={styles.item}>
    <FontAwesomeIcon icon={faTruck} className={styles.icon}/>
    <div className={styles.text}>Swift Delivery</div>
    </span>
    <span className={styles.item}>
    <FontAwesomeIcon icon={faHourglassHalf} className={styles.icon}/>
    <div className={styles.text}>Timely Deliver</div>
    </span>
    <span className={styles.item}>
    <FontAwesomeIcon icon={faPeopleCarryBox} className={styles.icon}/>
    <div className={styles.text}>Door To Door</div>
    </span>
    <span className={styles.item}>
    <FontAwesomeIcon icon={faBoxArchive} className={styles.icon}/>
    <div className={styles.text}>Secure Delivery</div>
    </span>
    </div>
    </>
  )
}

export default Icon