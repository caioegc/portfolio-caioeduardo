import React from "react";

function Contact() {
return (
// ID 'contato' é para a navegação
<section className="section-content" id="contato">
<h2>Contato</h2>
<div className="section-divider"></div>
<p className="contact-text">
Estou sempre aberto a novas conexões e oportunidades. Encontre-me nas plataformas abaixo!
</p>

  <div className="contact-links">
    {/* Ícone para GitHub */}
    <a href="SUA_URL_DO_GITHUB" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-github"></i> 
    </a>

    {/* Ícone para LinkedIn */}
    <a href="SUA_URL_DO_LINKEDIN" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-linkedin-in"></i>
    </a>

    {/* Ícone para E-mail */}
    <a href="mailto:SEU_EMAIL_DE_CONTATO">
      <i className="fas fa-envelope"></i>
    </a>
  </div>
</section>

);
}

export default Contact;