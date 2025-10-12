import React from "react";

function Contact() {
  return (
    <section className="contato-container" id="contato">
      <h2 className="contato-title">Contato</h2>
      <div className="section-divider"></div>

      <p className="contact-text">
        Estou sempre aberto a novas conexões e oportunidades. Encontre-me nas plataformas abaixo!
      </p>

      <div className="contact-links">
        {/* GitHub */}
        <a
          href="https://github.com/caioegc"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
            alt="GitHub"
            className="contact-icon"
          />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/caioegc/"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
            alt="LinkedIn"
            className="contact-icon"
          />
        </a>

        {/* Email */}
        <a href="mailto:caioegc@gmail.com" title="E-mail">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            width="40"
            height="40"
            className="contact-icon"
          >
            <path d="M12 13.065L0 6V4l12 7.065L24 4v2l-12 7.065zM0 8v12h24V8l-12 7.065L0 8z" />
          </svg>
        </a>
      </div>
    </section>
  );
}

export default Contact;
