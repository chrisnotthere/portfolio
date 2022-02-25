import React, { useContext, useRef, useState } from 'react';
import './contact.css'
import Maple from '../../images/maple.png'
import Email from '../../images/mail.png'
import Github from '../../images/github.png';
import Resume from '../../images/resume.png';
import Linkedin from '../../images/linkedin.png';
import emailjs from '@emailjs/browser';
import { ThemeContext } from '../../context';

const Contact = () => {
  const formRef = useRef()
  const [sent, setSent] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('portfolio_service', 'template_f4qmgb5', formRef.current, 'user_04GVcYLqBmSzObkSqhXuG')
      .then((result) => {
        console.log(result.text);
        setSent(true);
      }, (error) => {
        console.log(error.text);
      });
  }

  return (
    <div className='contact' id='contact' >

      <div className='contact-bg'></div>
      <div className='contact-wrapper'>

        <div className='contact-left'>
          <h1 className='contact-title'>Contact</h1>
          <div className='contact-info'>
            <div className='contact-info-item'>
              <img className='contact-icon' src={Email} alt=''
                style={{ filter: darkMode && 'invert(91%) sepia(65%) saturate(1451%) hue-rotate(317deg) brightness(97%) contrast(95%)' }}
              />
              mr.chrisnash@gmail.com
            </div>
            <div className='contact-info-links'>
              <a href='https://github.com/chrisnotthere' target="_blank" rel='noreferrer' >
                <img className='contact-icon link' src={Github} alt='github'
                  style={{ filter: darkMode && 'invert(91%) sepia(65%) saturate(1451%) hue-rotate(317deg) brightness(97%) contrast(95%)' }}
                />
              </a>
              <a href='https://www.linkedin.com/in/chris-n-60a7361b7/' target="_blank" rel='noreferrer' >
                <img className='contact-icon link' src={Linkedin} alt='linkedin'
                  style={{ filter: darkMode && 'invert(91%) sepia(65%) saturate(1451%) hue-rotate(317deg) brightness(97%) contrast(95%)' }}
                />
              </a>
              <a href=''>
                <img className='contact-icon link' src={Resume} alt='resume'
                  style={{ filter: darkMode && 'invert(91%) sepia(65%) saturate(1451%) hue-rotate(317deg) brightness(97%) contrast(95%)' }}
                />
              </a>
            </div>
            <div className='contact-info-item'>
              <img className='contact-icon' src={Maple} alt=''
                style={{ filter: darkMode && 'invert(91%) sepia(65%) saturate(1451%) hue-rotate(317deg) brightness(97%) contrast(95%)' }}
              />
              Victoria, BC.
            </div>
          </div>
        </div>

        <div className='contact-right'>
          <p className='contact-desc'>
            Feel free to get in touch. I am currently looking for a full-time role.
          </p>
          <form ref={formRef} onSubmit={handleSubmit} >
            <input type='text' placeholder='Name' name='name' required
              style={{ backgroundColor: darkMode && "#555" }}
              className={darkMode ? 'dark' : ''}
            />
            <input type='text' placeholder='Subject' name='subject' required
              style={{ backgroundColor: darkMode && "#555" }}
              className={darkMode ? 'dark' : ''}
            />
            <input type='email' placeholder='Email' name='email' required
              style={{ backgroundColor: darkMode && "#555" }}
              className={darkMode ? 'dark' : ''}
            />
            <textarea rows='10' placeholder='Message' name='message' required
              style={{ backgroundColor: darkMode && "#555" }}
              className={darkMode ? 'dark' : ''}
            />
            {sent
              ?
              <p className='contact-sent'>Email sent.</p>
              :
              <button>Submit</button>
            }
          </form>
        </div>
      </div>
    </div>
  )
};

export default Contact;
