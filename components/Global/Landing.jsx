"use client"
import React from 'react';
import Typewriter from 'typewriter-effect';
import styles from "../../app/style/Landing.module.css";
import Image from 'next/image';
import Icon from './Icon';
import {signIn, useSession} from "next-auth/react"
//import video from '../public/videos/ooo.mp4';
const Landing = () => {
    const handleScrollTo = (id) => {
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: "smooth" });
    };
    const { data : session, status} = useSession

    return (
        <>
            <div className={styles.container}>
                <div className={styles.text}>
                    <div className={styles.title}>
                        <h1 className={styles.titleH1}>
                            <Typewriter
                                options={{
                                    strings: ['Welcome To ZAGEL.', 'Welcome To ZAGEL.'],
                                    autoStart: true,
                                    loop: true
                                }}
                            />
                        </h1>
                        
                    </div>
                    <div>
                        <p className={styles.description}>
            Customer satisfaction is at the core of our business, and we ensure the highest level of service and quality.
                        </p>
                    </div>
                    <Icon />
                </div>
                <div className={styles.images}>
                    <div className={styles.imageWrapper}>
                    <img src="/imgs/mobile3.jpg" alt="slide" className={styles.image} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Landing;
