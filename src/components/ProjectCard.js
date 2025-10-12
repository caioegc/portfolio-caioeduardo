import React from "react";

// Este componente vai receber os detalhes do projeto como 'props'
function ProjectCard(props) {
  return (
    <div className="project-card">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <div className="project-links">
        {/* Usamos links simples por enquanto */}
        <a href={props.githubLink} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href={props.liveLink} target="_blank" rel="noopener noreferrer">
          Live Demo
        </a>
      </div>
      <div className="project-techs">
        {/* Mapear as tecnologias como badges */}
        {props.techs && props.techs.map((tech, index) => (
          <span key={index} className="tech-badge">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;