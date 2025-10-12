import React from "react";
import profileImg from "../assets/perfil.png"; // caminho correto

function Header() {
  return (
    <header id="topo" className="hero-section">

      {/* ===== NAVBAR ===== */}
      <nav className="navbar">
        <ul className="nav-links">
          <li><a href="#inicio">Início</a></li>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#stack">Skills</a></li>
          <li><a href="#projetos">Projetos</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>

      {/* ===== CONTEÚDO PRINCIPAL ===== */}
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