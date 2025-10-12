import React from "react";
// Importe o ProjectCard, certifique-se que o nome do arquivo é ProjectCard.js
import ProjectCard from "./ProjectCard"; 

function Projects() {
  return (
    // Adicionamos o ID para a Navegação
    <section className="section-content" id="projetos">
      <h2>Projetos</h2>
      {/* Linha Divisória */}
      <div className="section-divider"></div>

      <div className="projects-grid"> 
        {/* PROJETO 1: App Financeiro */}
        <ProjectCard 
          title="App de Gerenciamento Financeiro"
          description="Aplicação Full Stack para controle de despesas e receitas. Demonstra meu uso de hooks e autenticação com JWT."
          // Use um placeholder ou substitua pela URL da sua imagem
          imageUrl="https://placehold.co/400x180/093A3E/ffffff?text=FINANCEIRO"
          techs={["React", "Node.js", "MongoDB", "Auth"]}
          githubLink="LINK_DO_GITHUB_1"
          liveLink="LINK_DO_DEMO_1"
        />
        
        {/* PROJETO 2: Blog com Next.js */}
        <ProjectCard 
          title="Blog com Next.js"
          description="Blog estático e performático construído com Next.js e consumo de API externa. Foco em SEO e acessibilidade."
          // Use um placeholder ou substitua pela URL da sua imagem
          imageUrl="https://placehold.co/400x180/4b0082/ffffff?text=BLOG+NEXT"
          techs={["Next.js", "CSS Modules", "API REST"]}
          githubLink="LINK_DO_GITHUB_2"
          liveLink="LINK_DO_DEMO_2"
        />
        
        {/* Você pode adicionar mais projetos aqui! */}
      </div>
    </section>
  );
}

export default Projects;
