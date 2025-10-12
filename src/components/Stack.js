import React from "react";
import "../App.css";

const stack = {
  "Front-End": [
    { nome: "HTML", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
    { nome: "CSS", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
    { nome: "JavaScript", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
    { nome: "TypeScript", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
    { nome: "React", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { nome: "Angular", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg" },
  ],
  "Back-End": [
    { nome: "Java", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
    { nome: "Spring", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" },
    { nome: "Node.js", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
    { nome: "MongoDB", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
  ],
  "Ferramentas": [
    { nome: "Docker", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
    { nome: "Git", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
  ],
};

function Stack() {
  return (
    <section className="section-content stack-section">
      <h2>🧠 Stack Principal</h2>
      <div className="section-divider"></div>

      {Object.entries(stack).map(([categoria, tecnologias]) => (
        <div key={categoria} className="stack-category">
          <h3>{categoria}</h3>
          <div className="stack-grid">
            {tecnologias.map((tec) => (
              <div key={tec.nome} className="stack-card" title={tec.nome}>
                <div className="icon-wrapper">
                  <img src={tec.icone} alt={tec.nome} className="stack-icon" />
                </div>
                <span>{tec.nome}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Stack;
