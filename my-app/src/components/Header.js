import React from "react";

function Header({ toggleAbout, toggleProjects, toggleContact, toggleResume }) {
    return (
      <header className="App-Header">
        <h1>Dannika Long</h1>
        <nav>
          <ul>
            <a href="#about" onClick={toggleAbout}>
                About
            </a>
            <a href="#projects" onClick={toggleProjects}>
                Projects
            </a>
            <a href="#contact" onClick={toggleContact}>
                Contact
            </a>
            <a href="#resume" onClick={toggleResume}>
                Resume
            </a>
          </ul>
        </nav>
      </header>
    );
  }
  

export default Header;
