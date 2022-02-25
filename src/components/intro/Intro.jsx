import React, { useContext, useEffect } from 'react';
import './intro.css';
import Webdev from '../../images/webdev.png';
import { ThemeContext } from '../../context';

const Intro = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  function consoleText(words, id, colors) {
    var visible = true;
    var con = document.getElementById('console');
    var letterCount = 1;
    var x = 1;
    var waiting = false;
    var target = document.getElementById(id)
    target.setAttribute('style', 'color:' + colors[0])
    window.setInterval(function () {

      if (letterCount === 0 && waiting === false) {
        waiting = true;
        target.innerHTML = words[0].substring(0, letterCount)
        window.setTimeout(function () {
          var usedColor = colors.shift();
          colors.push(usedColor);
          var usedWord = words.shift();
          words.push(usedWord);
          x = 1;
          target.setAttribute('style', 'color:' + colors[0])
          letterCount += x;
          waiting = false;
        }, 1000)
      } else if (letterCount === words[0].length + 1 && waiting === false) {
        waiting = true;
        window.setTimeout(function () {
          x = -1;
          letterCount += x;
          waiting = false;
        }, 1000)
      } else if (waiting === false) {
        target.innerHTML = words[0].substring(0, letterCount)
        letterCount += x;
      }
    }, 140)
    window.setInterval(function () {
      if (visible === true) {
        con.className = 'console-underscore hidden'
        visible = false;
      } else {
        con.className = 'console-underscore'
        visible = true;
      }
    }, 400)
  }

  useEffect(()=> {
    // function([string1, string2, string3],target id,[color1, color2, color3])    
    consoleText(['Developer', 'Designer', 'Life-long learner'], 'text', ['#4d9078', '#e26729', '#6596ce']);
  }, [])

  return (
    <section className='intro' id='home' >

      <div className="intro-left">
        <div className="intro-left-wrapper" style={{ filter: darkMode && 'invert(100%) sepia(65%) hue-rotate(300deg)' }}>
          <div className="intro-greeting">Hello, my name is</div>
          <div className="intro-name">Chris Nash</div>
          <div className="intro-title">

            <div className='console-container'>
              <span id='text'></span>
              <div className='console-underscore' id='console'>&#95;</div>
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

    </section>
  )
};

export default Intro;
