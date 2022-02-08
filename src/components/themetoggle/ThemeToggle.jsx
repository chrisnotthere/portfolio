import React, { useContext } from 'react';
import './themetoggle.css';
import Sun from '../../images/sun.png'
import Moon from '../../images/moon.png'
import { ThemeContext } from '../../context';

const ThemeToggle = () => {
  const theme = useContext(ThemeContext);

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };

  return (
    <div className='toggle'>
      <img src={Sun} alt="" className="toggle-icon" />
      <img src={Moon} alt="" className="toggle-icon" />
      <div
        className="toggle-button"
        onClick={handleClick}
        style={{ left: theme.state.darkMode ? 5 : 40 }}
      ></div>
    </div>
  )
};

export default ThemeToggle;
