import React from 'react';
import './about.css'
import Headshot from '../../images/headshot.png'

const About = () => {
  return (
    <section className="about" id='about'>
      <div className="about-left">
        <div className="about-card bg"></div>
        <div className="about-card">
          <img src={Headshot} alt="" className="about-img" />
        </div>
      </div>
    <div className="about-right">
      <h1 className="about-title"><span>About Me</span> – From Hospitality to Web Development</h1>
      <p className="about-desc">Once a cook, now a full-stack web developer, my journey is one of continuous transformation and growth.</p>
      <p className="about-desc">The unforeseen challenges of 2020 served as a catalyst for change, propelling me from the hospitality industry into the exciting world of web development. I had long considered changing careers before the 2020 pandemic, but after losing my job, that was the push I needed to make the jump.</p>
      <p className="about-desc">Starting with freeCodeCamp's "Responsive Web Design Certification," my fascination with coding quickly blossomed. I further expanded my knowledge through an "Interactive Media Development" certificate at Camosun College, diving into web development, game development with Unity/Maya, and UI/UX design principles. My learning path didn't stop there; I embraced self-education, completing The Odin Project's Full Stack Javascript curriculum.</p>
      <p className="about-desc">Transitioning from hospitality endowed me with a unique set of transferable skills - adaptability, effective communication, and the ability to remain composed under pressure. These skills have helped me in my development career, enabling me to tackle problems with a creative and pragmatic approach.</p>
      <p className="about-desc">Over the past two years, working as a full-stack web developer for a local Victoria-based company, I have improved my technical skills and contributed to multiple projects. This experience has reinforced my love for building things and solving problems, allowing me to apply my knowledge in a real-world setting.</p>
      <p className="about-desc">Now, with nearly two years of professional experience under my belt, I am eager to take on new challenges and opportunities. I am looking for a role where I can contribute my skills to a forward-thinking team and continue my professional growth.</p>
    </div>
    </section>
  )
};

export default About;
