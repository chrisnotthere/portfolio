import React from 'react';
import './about.css'
import Headshot from '../../images/headshot.png'

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
        <h1 className="about-title"><span>About me</span> From cooking to web development.</h1>
        <p className="about-desc">I'm an ex-cook who loves building things from scratch.</p>
        <p className="about-desc">I had long considered changing career before the 2020 pandemic, but after losing my job that was the push I needed to make the jump. I immediately began learning the basics though freeCodeCamp, finishing their "Responsive Web Design Certification" and loved every second of it. I then completed an "Interative Media Development" college certificate, where I learned all kinds of things from web development, to 3D modeling in Autodesk Maya, and worked with Procreate and Adobe After Effects. After IMD I have been self-taught, solely focusing on web development. Since then I have finished The Odin Project's Full Stack Javascript curriculum.</p>
        <p className="about-desc">My time in the hospitality industry has taught me many things, and left me with an abundance transferable skills such as "get-stuff-done", effective communication, a calm head during the lunch-rush, and much more.</p>
        <p className="about-desc">Web development allows me to create things from the ground-up, solve technical problems along the way, and harness my creativity. The blend of development and design is what makes me excited about a future in this field.</p>
        <p className="about-desc">After almost two years of learning, I am ready to level-up to a full-time role where I can contribute to a team while continuing to learn and grow.</p>
      </div>
    </div>
  )
};

export default About;
