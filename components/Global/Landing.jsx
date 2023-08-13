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
                                    strings: ['Welcome To ZAGEL.', 'Everything you need to ship better.'],
                                    autoStart: true,
                                    loop: true
                                }}
                            />
                        </h1>
                        
                    </div>
                    <div>
                        <p className={styles.description}>
                        With one shipping contract, you'll be able to start, manage and grow your business and ship local and international shipments from a single dashboard.
                        </p>
                    </div>
                    <div className={styles.link}>
                        <a href='/contactUs' className={styles.explore}>Explore</a>
                        <a href='/#menu' className={styles.contact}>Contact Us</a>
                    </div>
                </div>
                <div className={styles.images}>
                    <div className={styles.imageWrapper}>
                    <img src="/imgs/Landing.jpg" alt="slide" className={styles.image} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Landing;
