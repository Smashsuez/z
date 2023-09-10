"use client"
import React, { Fragment, useState, useEffect} from 'react'
import Collapsible from 'react-collapsible'
import Question from "../../app/Detail/Accordion"
import question from "../../app/Detail/Accordion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown} from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';

const According = () => {
    const [detail, setDetail] = useState(Question);
    useEffect(() => {
        AOS.init({
             duration: 800,
             once: false,
           })
     }, [])
  return (
    <>
        <section className='according' id='according'>
            <div className='according'>
                <div className='according-row'>
                    <div className='left'>
                        <h3>Frequently ask</h3>
                        {
                            detail.map((detail)=> {
                                return(
                                    <div className='left-content'>
                                        <Collapsible 
                                        className='collapsile'
                                        trigger={[<FontAwesomeIcon aria-hidden="true" icon={faChevronUp} className='Trigger'/>, detail.question]}
                                        triggerWhenOpen={[<FontAwesomeIcon aria-hidden="true" icon={faChevronDown} className='Trigger'/>, detail.question]}
                                        >
                                            <p className='content-show'>
                                                {detail.answer}
                                            </p>
                                        </Collapsible>
                                    </div>
                                )
                            })

                        }
                    </div>
                    <div className='right' data-aos="fade-left">
                        <img src='/imgs/earth (2).jpg' alt='earth'/>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default According