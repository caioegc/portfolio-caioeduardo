import React from "react";
import "../App.css";

const stack = {
  "Front-End": [
    { nome: "HTML", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { nome: "CSS", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { nome: "JavaScript", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { nome: "TypeScript", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { nome: "React", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { nome: "Angular", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
  ],
  "Back-End": [
    { nome: "Java", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { nome: "Spring", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
    { nome: "Node.js", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { nome: "MongoDB", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  ],
  "Ferramentas": [
    { nome: "Docker", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { nome: "Git", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  ],
};

export default function Stack() {
  return (
    <section className="stack-container" id="stack">
      <h2 className="stack-title">Stack Principal</h2>

      <div className="stack-wrapper">
        {Object.entries(stack).map(([categoria, tecnologias]) => (
          <div key={categoria} className="stack-box">
            <h3>{categoria}</h3>
            <div className="stack-grid">
              {tecnologias.map((tech) => (
                <div key={tech.nome} className="stack-card">
                  <img src={tech.icone} alt={tech.nome} className="stack-icon" />
                  <p>{tech.nome}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
