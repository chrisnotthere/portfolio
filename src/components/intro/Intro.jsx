import React from 'react';
import'./intro.css'

const Intro = () => {
  return (
    <div className='intro'>

      <div className="intro-left">
        <div className="intro-greeting">Hello, my name is</div>
        <div className="intro-name">Chris Nash</div>
        <div className="intro-title">
          <div className="intro-title-item">Web Developer</div>
          <div className="intro-title-item">Designer</div>
          <div className="intro-title-item">Writer</div>
        </div>
      </div>

      <div className="intro-right">
        right
      </div>


    </div>
  )
};

export default Intro;
