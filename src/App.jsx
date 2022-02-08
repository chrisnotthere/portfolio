import { useContext } from 'react';
import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Intro from './components/intro/Intro';
import ProjectList from './components/projectList/ProjectList';
import ThemeToggle from './components/themetoggle/ThemeToggle';
import { ThemeContext } from './context';

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="App"
      style={{
        backgroundColor: darkMode ? "#333" : "#f2c14e",
        color: darkMode && "white",
      }}>
      <ThemeToggle />
      <Intro />
      <About />
      <ProjectList />
      <Contact />
    </div>
  );
}

export default App;
