import React from "react";

const projectData = [
  {
    name: "Project 1",
    githubLink: "https://github.com/dannikaml/portfolio-mgmt-hub",
    image: "https://picsum.photos/id/1/200/200",
  },
  {
    name: "Project 2",
    githubLink: "https://github.com/dannikaml/Blogged-MVC",
    image: "https://picsum.photos/id/2/200/200",
  },
  {
    name: "Project 3",
    githubLink: "https://github.com/dannikaml/game-hub",
    image: "https://picsum.photos/id/3/200/200",
  },
];

function Projects(props) {
  return (
    <div>
      {projectData.map((project, index) => (
        <a href={project.githubLink} target="_blank" rel="noreferrer" key={index}>
          <img src={project.image} alt={project.name} />
        </a>
      ))}
    </div>
  );
}

export default Projects;


