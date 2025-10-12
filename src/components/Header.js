import React from "react";
import profileImg from "../assets/perfil.png"; // caminho correto

// Função para interceptar o clique e fazer a rolagem suave
const handleSmoothScroll = (e) => {
    e.preventDefault(); // 1. Impede o comportamento padrão de salto imediato
    
    // Pega o ID da seção (ex: #sobre -> sobre)
    const targetId = e.currentTarget.getAttribute('href').substring(1); 
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
        // 2. Rola até o elemento usando a animação suave
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start' 
        });
    }
};

function Header() {
  return (
    <header id="topo" className="hero-section">

      {/* ===== NAVBAR ===== */}
      <nav className="navbar">
        <ul className="nav-links">
          {/* APLICAÇÃO DO onClick EM CADA LINK */}
          <li><a href="#topo" onClick={handleSmoothScroll}>Início</a></li>
          <li><a href="#sobre" onClick={handleSmoothScroll}>Sobre</a></li>
          <li><a href="#stack" onClick={handleSmoothScroll}>Skills</a></li>
          <li><a href="#projetos" onClick={handleSmoothScroll}>Projetos</a></li>
          <li><a href="#contato" onClick={handleSmoothScroll}>Contato</a></li>
        </ul>
      </nav>

      {/* ===== CONTEÚDO PRINCIPAL (MANTIDO) ===== */}
      <div className="hero-content">
        <div className="profile-img-wrapper">
          <img
            src={profileImg}
            alt="Foto de Caio Eduardo"
            className="profile-img"
          />
        </div>
        <h1 className="hero-title">Caio Eduardo</h1>
        <p className="hero-subtitle">
          <strong>Desenvolvedor Full Stack </strong>
        </p>
      </div>
    </header>
  );
}

export default Header;