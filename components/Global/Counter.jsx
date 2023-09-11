import React from 'react'
import { useState } from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
import style from "../../app/style/Counter.module.css"


const Counter = () => {
    const [counterOn, setCounterOn] = useState(false);

  return (
    
     <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() =>setCounterOn(false)}>
        <div className={style.container}>
        <div className={style.heading}>
          <span className={style.title}>Our Numbers</span>
        </div>
            <div className={style.wrapper}>

                <div className={style.card}>
                    <div className={style.cardNumber}>
                        <span>{counterOn && <CountUp start={0} end={21} duration={4} delay={1}/>}</span>
                    </div>
                    <div className={style.cardDesc}>
                        <p><strong>Egyptain Branches</strong></p>
                    </div>
                </div>


                <div className={style.card}>
                    <div className={style.cardNumber}>
                        <span>{counterOn && <CountUp start={0} end={600} duration={2} delay={1} className={style.countUp}/>} +</span>
                    </div>
                    <div className={style.cardDesc}>
                        <p><strong>Active Clients</strong></p>
                    </div>
                </div>

                <div className={style.card}>
                    <div className={style.cardNumber}>
                        <span>{counterOn && <CountUp start={0} end={900} duration={3} delay={1}/>}K +</span>
                    </div>
                    <div className={style.cardDesc}>
                        <p><strong>Monthly Shipments</strong></p>
                    </div>
                </div>

                
            </div>
        </div>















    {/* <div>
        <h1>
            {counterOn && <CountUp start={0} end={100} duration={2} delay={0}/>} +
        </h1>
    </div> */}
    </ScrollTrigger>
  )
}

export default Counter