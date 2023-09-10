import React, {useEffect} from 'react'
import styles from "../../app/style/X.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

const X = () => {
    useEffect(() => {
        AOS.init({
             duration: 800,
             once: false,
           })
     }, [])
  return (
    <div className={styles.container} id='x'>
        
            <div className={styles.cardWrapper}>
                <div className={styles.card} data-aos="zoom-in-right">
                    <img src='/imgs/photo_2023-08-10_12-31-09.jpg' alt='' className={styles.image}/>
                    <div className={styles.content}>
                        <div className={styles.cardTitle}>One Contract For The Best Couriers</div>
                        <div className={styles.cardDesc}>Zagel choose the best Couriers in the market for you and allow you to work with more than one simultaneously.</div>
                    </div>
                </div>

                <div className={styles.card} data-aos="zoom-in">
                    <img src='/imgs/photo_2023-08-10_12-31-17.jpg' alt='' className={styles.image}/>
                    <div className={styles.content}>
                        <div className={styles.cardTitle}>Insurance and Safety</div>
                        <div className={styles.cardDesc}>Every shipment is insured with immediate reimbursement in case of damage, breakage or force majeure.</div>
                    </div>
                </div>

                <div className={styles.card} data-aos="zoom-in">
                    <img src='/imgs/photo_2023-08-10_12-31-18.jpg' alt='' className={styles.image}/>
                    <div className={styles.content}>
                        <div className={styles.cardTitle}>Tracking</div>
                        <div className={styles.cardDesc}>Track your shipments in real-time through our dashboard and keep a watchful eye over every order.</div>
                    </div>
                </div>

                <div className={styles.card}  data-aos="zoom-in-left">
                    <img src='/imgs/mobile2.jpg' alt='' className={styles.image}/>
                    <div className={styles.content}>
                        <div className={styles.cardTitle}>Reports</div>
                        <div className={styles.cardDesc}>Stay on top of the growth of your online business through our daily, weekly and monthly reports.</div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default X