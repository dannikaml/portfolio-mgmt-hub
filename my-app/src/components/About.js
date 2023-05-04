import React, { useState } from "react";

function About() {
  const [showAbout, setShowAbout] = useState(false);

  const handleAboutClick = () => {
    setShowAbout(true);
  };

  return (
    <section id="about">
      {showAbout ? (
        <div>
          <h2>About Me</h2>
          <p>Placeholder text for the About Me section</p>
        </div>
      ) : (
        <a href="#about" onClick={handleAboutClick}>
          Show About Me
        </a>
      )}
    </section>
  );
}

export default About;
