import React, { useState } from 'react';
import './App.css';
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
// import Resume from "./components/Resume";
import Footer from "./components/Footer";


function App() {
  const [showAbout, setShowAbout] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showContact, setShowContact] = useState(false);
  // const [showResume, setShowResume] = useState(false);

  // Function to toggle all show state variables to false
  const resetShowStates = () => {
    setShowAbout(false);
    setShowProjects(false);
    setShowContact(false);
    // setShowResume(false);
  }

  // Functions to toggle the state variables
  const toggleAbout = () => {
    resetShowStates();
    setShowAbout(!showAbout);
  }
  const toggleProjects = () => {
    resetShowStates();
    setShowProjects(!showProjects);
  }
  const toggleContact = () => {
    resetShowStates();
    setShowContact(!showContact);
  }
  // const toggleResume = () => {
  //   resetShowStates();
  //   setShowResume(!showResume);
  // }

  return (
    <div className="App">
      <Header
        toggleAbout={toggleAbout}
        toggleProjects={toggleProjects}
        toggleContact={toggleContact}
        // toggleResume={toggleResume}
      />
      {showAbout && <About />}
      {showProjects && <Projects />}
      {showContact && <Contact />}
      {/* {showResume && <Resume />} */}
      <Footer />
    </div>
  );
}


export default App;


