import React from "react";

function Header() {
  return (
    <header className="header-container">
      {/* Container principal para alinhamento horizontal */}
      <div className="header-content-wrapper">
        
        {/* Nome/Título (Link para o topo) */}
        <a href="#topo" className="header-title">
          <h1>Caio Eduardo</h1>
        </a>

        {/* Barra de Navegação */}
        <nav className="navbar">
          <ul className="nav-list">
            <li><a href="#sobre" className="nav-link">Sobre Mim</a></li>
            <li><a href="#projetos" className="nav-link">Projetos</a></li>
            <li><a href="#contato" className="nav-link">Contato</a></li>
          </ul>
        </nav>
      </div>
      
      {/* Subtítulo: Fica abaixo da barra de navegação */}
      <p className="header-subtitle">Desenvolvedor Full Stack 💻</p> 
    </header>
  );
}

export default Header;
