import React from 'react';
import './skills.css';
import Html from '../../images/html.png';
import Css from '../../images/css.png';

const Skills = () => {
  return (
    <div className='skills' id='skills'>
      <div className='skills-hr' />
      <h1 className="skills-title">Skills</h1>
      <h3 className="skills-category">Languages</h3>
      <ul className="skills-list">
        <li className="skills-list-item">
          <p className='skills-text'>HTML5</p>
          <img className='skills-icon' src={Html} alt="" />
        </li>
        <li className="skills-list-item">
          <p className='skills-text'>CSS3</p>
          <img className='skills-icon' src={Css} alt="" />
        </li>
        <li className="skills-list-item">etc...</li>
      </ul>
      <h3 className="skills-category">Technologies</h3>
      <ul className="skills-list">
        <li className="skills-list-item">node</li>
        <li className="skills-list-item">express</li>
        <li className="skills-list-item">mongodb</li>
      </ul>
      <h3 className="skills-category">Other Tools</h3>
      <ul className="skills-list">
        <li className="skills-list-item">git</li>
        <li className="skills-list-item">jest</li>
        <li className="skills-list-item">linux cli</li>
      </ul>

    </div>
  )
};

export default Skills;


