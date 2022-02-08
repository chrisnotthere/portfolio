import React from 'react';
import './about.css'
import Headshot from '../../images/headshot.jpg'

const About = () => {
  return (
    <div className="about" id='about'>
      <div className="about-left">
        <div className="about-card bg"></div>
        <div className="about-card">
          <img src={Headshot} alt="" className="about-img" />
        </div>
      </div>
      <div className="about-right">
        <h1 className="about-title">About Me</h1>
        <p className="about-sub">
          From cooking to web development.
        </p>
        <p className="about-desc">
          After losing my job during a pandemic, I decided to pursue a career in full-stack web development. 
          I have been interested in design and building things for a long time.
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum .
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum .
        </p>
      </div>
    </div>
  )
};

export default About;
