import React from "react";

function ProjectCard(props) {
  return (
    <div className="projeto-card">
      <h3>{props.title}</h3>
      <p>{props.description}</p>

      <div className="projeto-links">
        <a href={props.githubLink} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href={props.liveLink} target="_blank" rel="noopener noreferrer">
          Live Demo
        </a>
      </div>

      <div className="projeto-divider"></div>

      <div className="projeto-tags">
        {props.techs && props.techs.map((tech, index) => (
          <span key={index} className="projeto-tag">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;
