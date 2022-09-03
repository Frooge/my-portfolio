import {useState, useEffect, useRef} from 'react';
import Sidebar from './components/sidebar';
import Home from './components/home';
import Skills from './components/skills';
import Projects from './components/projects';
import Contacts from './components/contacts';

import './App.scss';
import 'animate.css/animate.css';

function App() {
  const [height, setHeight] = useState({home: 0, skills: 0, projects: 0, contacts: 0});

  const homeRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactsRef = useRef(null);

  useEffect(() => {
    setHeight({
      home: homeRef.current.clientHeight,
      skills: skillsRef.current.clientHeight,
      projects: projectsRef.current.clientHeight,
      contacts: contactsRef.current.clientHeight
    });
  }, []);

  return (
    <div className="App">
        <Sidebar height={height}/>
        <div ref={homeRef}>
          <Home />
        </div>
        <div ref={skillsRef}>
          <Skills/>
        </div>
        <div ref={projectsRef}>
          <Projects/>
        </div>
        <div ref={contactsRef}>
          <Contacts/>
        </div>
    </div>
  );
}

export default App;
