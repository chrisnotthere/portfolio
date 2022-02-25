import React from 'react';
import './skills.css';
import { frontend, backend, others } from '../../data'
import Skill from '../skill/Skill';

const Skills = () => {
  return (
    <section className='skills' id='skills'>
      <div className='skills-hr' />
      <h1 className="skills-title">Skills</h1>

      <ul className="skills-list">
        <h3 className="skills-category">Frontend</h3>
        <div className="skills-wrapper">
          {frontend.map((item) => (
            <Skill
              key={item.name}
              name={item.name}
              image={item.image}
            />
          ))}
        </div>
      </ul>

      <ul className="skills-list">
        <h3 className="skills-category">Backend</h3>
        <div className="skills-wrapper">

          {backend.map((item) => (
            <Skill
              key={item.name}
              name={item.name}
              image={item.image}
            />
          ))}
        </div>
      </ul>

      <ul className="skills-list">
        <h3 className="skills-category">Others</h3>
        <div className="skills-wrapper">

          {others.map((item) => (
            <Skill
              key={item.name}
              name={item.name}
              image={item.image}
            />
          ))}
        </div>
      </ul>
      <div className='skills-hr' />
    </section>
  )
};

export default Skills;
