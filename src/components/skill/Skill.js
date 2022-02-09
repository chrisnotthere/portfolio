import React from 'react'
import './skill.css'

const Skill = ({ name, image }) => {

  return (
    <div className='skill'>
      <li className="skills-list-item">
        <img className='skills-icon' src={image} alt="" />
      </li>
      <p className='skills-text'>{name}</p>
    </div>
  )
}

export default Skill
