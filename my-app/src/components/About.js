import React, { useState } from "react";

function About() {
  const [showAbout, setShowAbout] = useState(true);

  const handleAboutClick = () => {
    setShowAbout(true);
  };

  return (
    <section id="about">
      {showAbout ? (
        <div>
          <h2>About Me</h2>
          <p>I am a new developer who recently completed the Full Stack Bootcamp at Vanderbilt University. 
            My passion for learning and desire to pursue a career in web development has led me on the pursuit of proficiency in the MERN stack, 
            and I am excited to continue honing my skills as a front-end engineer or full-stack developer. With over 20 GitHub 
            repositories under my belt, I have demonstrated my ability to work on a variety of projects and collaborate with others.</p>

          <p>As I continue to search for new opportunities, I am especially interested in joining companies with great cultures 
            where I can grow both personally and professionally. I am a highly motivated individual who is committed to staying up-to-date with 
            the latest technologies and best practices in this dynamic field. I am eager to contribute my skills and work collaboratively with a
            team to create innovative, user-friendly applications.
            </p>
            <p>Completed a comprehensive curriculum in HTML5, CSS3, JavaScript, jQuery, Bootstrap, Express.js, React.js, Node.js, Database Theory, MongoDB, MySQL, Command Line, and Git.</p>
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
