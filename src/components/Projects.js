import React from "react";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section className="projetos-container" id="projetos">
      <h2 className="projetos-title">Projetos</h2>

      <div className="projetos-grid">
        {/* PROJETO 1: App Financeiro */}
        <ProjectCard 
          title="App de Gerenciamento Financeiro"
          description="Aplicação Full Stack para controle de despesas e receitas. Demonstra meu uso de hooks e autenticação com JWT."
          imageUrl="https://placehold.co/400x180/093A3E/ffffff?text=FINANCEIRO"
          techs={["React", "Node.js", "MongoDB", "Auth"]}
          githubLink="LINK_DO_GITHUB_1"
          liveLink="LINK_DO_DEMO_1"
        />
        
        {/* PROJETO 2: TO-DO LIST FULL STACK - SEU PROJETO REAL! */}
        <ProjectCard 
          title="To-Do List Full Stack"
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