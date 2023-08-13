import React from 'react'
import styles from "../../app/style/AboutUs.module.css"
const AboutUs = () => {
  return (
    <div className={styles.container}>
         <div className={styles.heading}>
          <span className={styles.title}>About Us</span>
          <span className={styles.TitleDis}>ZAGEL , CONNECTING GLOBAL BUSINESS AND OPPORTUNITY AND Egypt FIRST PRIVATELY OPERATED COURIER COMPANY.</span>
        </div>
        <div className={styles.text}>Simplified, Affordable Shipping And Logistics For Any Address In The World.
            The company has expanded into global shipping and logistics, growing from simple express delivery between two locations in 
            Egypt to a global e-commerce logistics solution provider. This stable, yet rapid expansion has been— and continues to be— fueled, in large part, 
            by the entrepreneurship of its founders and the diligence of its people.</div>
        <div className={styles.wrapper}>
            <div className={styles.cardContainer}>
                <div className={styles.SubText}>Zagel aspires to be a Egypt champion and the logistics partner of choice in 
                the region by facilitating trade globally, and locally for startups and small- to medium-sized enterprises 
                through cutting edge technologies, industry best practices, and a customer centric culture.
                </div>
            </div> 
            <div className={styles.cardContainerTwo}>
                <div className={styles.SubText}>Zagel will become an important part of the Egypt economic super-structure 
                and a sustainable wealth-generator for Egypt  citizens by becoming the solution provider of choice for 
                shipping services to and from the Egypt.<br/><br/>
                </div>
            </div> 
        </div>
    </div>
  )
}

export default AboutUs