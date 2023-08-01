"use client"
import React, {useState} from 'react'

const LangNav = () => {
    const [navActive, setNavActive] = useState(false);
      const toggleNavActive = () => {
    setNavActive(!navActive);
  };
  return (
    <div className="switch">
 	    <input id="language-toggle" className="check-toggle check-toggle-round-flat" type="checkbox"/>
 	    <label htmlFor="language-toggle"></label>
 	    <span className="on">AR</span>
 	    <span className="off">EN</span>
   	</div>
  )
}

export default LangNav