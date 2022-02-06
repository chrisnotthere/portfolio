import React from 'react';
import './intro.css';
import Man from '../../images/man.png';
import Webdev from '../../images/webdev.png';

const Intro = () => {
  return (
    <div className='intro'>

      <div className="intro-left">
        <div className="intro-left-wrapper">
          <div className="intro-greeting">Hello, my name is</div>
          <div className="intro-name">Chris Nash</div>
          <div className="intro-title">
            <div className="intro-title-start">I am a </div>
            <div className="intro-title-wrapper">
              <div className="intro-title-item i1">Web Developer</div>
              <div className="intro-title-item i2">Gamer</div>
              <div className="intro-title-item i3">Student</div>
            </div>
          </div>
        </div>
      </div>

      <div className="intro-right">
        <div className="intro-right-bg"></div>
        <img className='intro-right-image' src={Webdev} alt="" />
      </div>

    </div>
  )
};

export default Intro;
