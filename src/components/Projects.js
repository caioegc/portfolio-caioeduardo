import React from "react";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section className="projetos-container" id="projetos">
      <h2 className="projetos-title">Projetos</h2>

      <div className="projetos-grid">
        {/* PROJETO 1: JOGO DA COBRINHA FULL STACK */}
        <ProjectCard 
          title="Jogo da Cobrinha Full Stack"
          description="Clássico Snake Game desenvolvido com arquitetura completa. Backend em Java Spring Boot com API REST e frontend em React com hooks."
          imageUrl={process.env.PUBLIC_URL + "/snake-game-screenshot.png"}
          techs={["Java", "Spring Boot", "React", "H2 Database", "API REST"]}
          githubLink="https://github.com/caioegc/snake-game"
          liveLink="#" 
        />
        
        {/* PROJETO 2: TO-DO LIST FULL STACK - SEU PROJETO REAL! */}
        <ProjectCard 
          title="Lista de tarefa Full Stack"
          description="Sistema completo de gerenciamento de tarefas com back-end em Java puro e front-end moderno com dark mode e drag & drop."
          imageUrl={process.env.PUBLIC_URL + "/todo-screenshot.png"}
          techs={["Java", "JavaScript", "HTML/CSS", "API REST"]}
          githubLink="https://github.com/caioegc/todo-backend-front-java"
          liveLink="#" // Coloque o link do deploy se tiver
        />
      </div>
    </section>
  );
}

export default Projects;
