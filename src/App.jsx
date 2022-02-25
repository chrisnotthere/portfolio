import { useContext } from 'react';
import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Intro from './components/intro/Intro';
import NavBar from './components/navbar/NavBar';
import ProjectList from './components/projectList/ProjectList';
import ScrollButton from './components/scrollButton/ScrollButton';
import Skills from './components/skills/Skills';
import ThemeToggle from './components/themetoggle/ThemeToggle';
import { ThemeContext } from './context';

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#333" : "#f2c14e",
        color: darkMode && "white",
      }}>
      <ThemeToggle />
      <NavBar />
      <Intro />
      <About />
      <ProjectList />
      <Skills />
      <Contact />
      <ScrollButton />
    </div>
  );
}

export default App;
