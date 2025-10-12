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
        
        {/* PROJETO 2: Blog com Next.js */}
        <ProjectCard 
          title="Blog com Next.js"
          description="Blog estático e performático construído com Next.js e consumo de API externa. Foco em SEO e acessibilidade."
          imageUrl="https://placehold.co/400x180/4b0082/ffffff?text=BLOG+NEXT"
          techs={["Next.js", "CSS Modules", "API REST"]}
          githubLink="LINK_DO_GITHUB_2"
          liveLink="LINK_DO_DEMO_2"
        />
      </div>
    </section>
  );
}

export default Projects;
