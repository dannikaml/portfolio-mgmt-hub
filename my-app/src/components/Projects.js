import React, { useState } from "react";

const projectData = [
  {
    name: "Portfolio Hub",
    githubLink: "https://github.com/dannikaml/portfolio-mgmt-hub",
    image: "https://picsum.photos/id/1018/300/300",
  },
  {
    name: "Tech Blog!",
    githubLink: "https://github.com/dannikaml/Blogged-MVC",
    image: "https://picsum.photos/id/1021/300/300",
  },
  {
    name: "Book Hub",
    githubLink: "https://github.com/dannikaml/game-hub",
    image: "https://picsum.photos/id/1040/300/300",
  },
  {
    name: "Employee Tracker",
    githubLink: "https://github.com/dannikaml/sql-tracked",
    image: "https://picsum.photos/id/1069/300/300",
  },
  {
    name: "Team Profile Generator",
    githubLink: "https://github.com/dannikaml/oop-pain",
    image: "https://picsum.photos/id/1070/300/300",
  },
  {
    name: "Tasks Mastered",
    githubLink: "https://github.com/dannikaml/tasks-mastered",
    image: "https://picsum.photos/id/1084/300/300",
  },
];

function Projects(props) {
  const [hoveredProject, setHoveredProject] = useState(null);

  const handleMouseEnter = (project) => {
    setHoveredProject(project);
  };

  const handleMouseLeave = () => {
    setHoveredProject(null);
  };

  return (
    <div>
      {projectData.map((project, index) => (
        <div
          key={index}
          onMouseEnter={() => handleMouseEnter(project)}
          onMouseLeave={handleMouseLeave}
          style={{ position: "relative", display: "inline-block" }}
        >
          <a href={project.githubLink} target="_blank" rel="noreferrer">
            <img src={project.image} alt={project.name} />
          </a>
          {hoveredProject === project && (
            <div
              style={{
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p
                className="project-name"
                style={{ color: "white", fontWeight: "bold" }}
              >
                {project.name}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Projects;
