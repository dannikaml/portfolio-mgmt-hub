import React from "react";

function Projects(props) {
  return (
    <a href={props.githubLink} target="_blank" rel="noreferrer">
      <img src={props.image} alt={props.name} />
    </a>
  );
}

export default Projects;

