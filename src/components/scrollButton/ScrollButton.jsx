import React, { useState } from 'react'
import './scrollbutton.css'
import Top from '../../images/top.png'

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 600) {
      setVisible(true);
    }
    else {
      setVisible(false)
    }
  }

  window.addEventListener('scroll', toggleVisible);

  return (
    <a href='#home' style={{display: visible ? 'inline' : 'none'}} >
      <div className="scroll-to-top">
        <img src={Top} alt="" />
      </div>
    </a>
  )
}

export default ScrollButton
