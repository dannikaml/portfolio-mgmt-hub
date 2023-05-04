import React, { useState } from 'react';
import './App.css';
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
// import Contact from "./components/Contact";
// import Resume from "./components/Resume";


  function App() {
    const [showAbout, setShowAbout] = useState(false);
    const [showProjects, setShowProjects] = useState(false);
    // const [showContact, setShowContact] = useState(false);
    // const [showResume, setShowResume] = useState(false);
  
    // Functions to toggle the state variables
    const toggleAbout = () => setShowAbout(!showAbout);
    const toggleProjects = () => setShowProjects(!showProjects);
    // const toggleContact = () => setShowContact(!showContact);
    // const toggleResume = () => setShowResume(!showResume);
  
    return (
      <div className="App">
        <Header
          toggleAbout={toggleAbout}
          toggleProjects={toggleProjects}
          // toggleContact={toggleContact}
          // toggleResume={toggleResume}
        />
        {showAbout && <About />}
        {showProjects && <Projects />}
        {/* {showContact && <Contact />}
        {showResume && <Resume />}
        <Footer /> */}
      </div>
    );
  }


export default App;



