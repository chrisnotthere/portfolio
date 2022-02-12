import React, { useContext } from 'react';
import './intro.css';
import Webdev from '../../images/webdev.png';
import { ThemeContext } from '../../context';

const Intro = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className='intro' id='home' >

      <div className="intro-left">
        <div className="intro-left-wrapper" style={{ filter: darkMode && 'invert(100%) sepia(65%) hue-rotate(300deg)' }}>
          <div className="intro-greeting">Hello, my name is</div>
          <div className="intro-name">Chris Nash</div>
          <div className="intro-title">
            <div className="intro-title-wrapper">
              <div className="intro-title-item i1">Developer</div>
              <div className="intro-title-item i2">Designer</div>
              <div className="intro-title-item i3">Student</div>
            </div>
          </div>
        </div>
      </div>

      <div className="intro-right">
        <div className="intro-right-bg"></div>
        <img className='intro-right-image' src={Webdev} alt=""
          style={{ filter: darkMode && 'invert(91%) sepia(65%) saturate(1451%) hue-rotate(317deg) brightness(97%) contrast(95%)' }}
        />
      </div>

    </div>
  )
};

export default Intro;
