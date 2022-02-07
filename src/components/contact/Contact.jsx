import React, { useRef, useState } from 'react';
import './contact.css'
import Maple from '../../images/maple.png'
import Email from '../../images/mail.png'
import Github from '../../images/github.png';
import Resume from '../../images/resume.png';
import Linkedin from '../../images/linkedin.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef()
  const [sent, setSent] = useState(false);

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
    <div className='contact'>

      <div className='contact-bg'></div>
      <div className='contact-wrapper'>

        <div className='contact-left'>
          <h1 className='contact-title'>Contact</h1>
          <div className='contact-info'>
            <div className='contact-info-item'>
              <img className='contact-icon' src={Email} alt='' />
              mr.chrisnash@gmail.com
            </div>
            <div className='contact-info-links'>
              <a href='https://github.com/chrisnotthere' target="_blank" rel='noreferrer' >
                <img className='contact-icon link' src={Github} alt='github' />
              </a>
              <a href='https://www.linkedin.com/in/chris-n-60a7361b7/' target="_blank" rel='noreferrer' >
                <img className='contact-icon link' src={Linkedin} alt='linkedin' />
              </a>
              <a href=''>
                <img className='contact-icon link' src={Resume} alt='resume' />
              </a>
            </div>
            <div className='contact-info-item'>
              <img className='contact-icon' src={Maple} alt='' />
              Victoria, BC. Canada
            </div>
          </div>
        </div>

        <div className='contact-right'>
          <p className='contact-desc'>
            Feel free to get in touch. I am available for
            freelancing if the right project comes along.
          </p>
          <form ref={formRef} onSubmit={handleSubmit} >
            <input type='text' placeholder='Name' name='name' />
            <input type='text' placeholder='Subject' name='subject' />
            <input type='text' placeholder='Email' name='email' />
            <textarea rows='10' placeholder='Message' name='message' />
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
