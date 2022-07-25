import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

import styles from "./Contact.module.css";

function Contact() {
  return (
    <div className={styles.project_container}>
      <div className={styles.title_container}>
        <h1>Contato</h1>
      </div>
      <div className={styles.contact_container}>
        <p>
          Projeto FullStack CRUD (Create, Read, Update e Delete) desenvolvido por
          <a
            href="https://www.linkedin.com/in/joao-ac-castro/"
            target="_blank"
            rel="noreferrer"
          >
            João Antônio de Castro
          </a>{" "}
          durante o curso de React da Instituição{" "}
          <a
            href="https://www.horadecodar.com.br/"
            target="_blank"
            rel="noreferrer"
          >
            Hora de Codar
          </a>{" "}
          do programador{" "}
          <a
            href="https://www.linkedin.com/in/matheusbattisti/"
            target="_blank"
            rel="noreferrer"
          >
            Matheus Battisti
          </a>
          .
        </p>
        <br />
        <p>
          Este projeto foi desenvolvido utilizando HTML com JSX, Style Component
          com CSS, API e requisições como FastAPI e por fim mas não menos
          importante a parte de JavaScript com React, abrangendo React Router,
          Hook, UseState, UseEffect, Useparams, UUID, entre outros.
        </p>
        <br />
        <p>
          Você pode conferir outros projetos que desenvolvi através do meu
          GitHub clicando no ícone abaixo, ou entrar em contato comigo através
          dos outros links.
        </p>
        <br />
        <ul className={styles.social_list}>
          <li className={styles.contact_list}>
            <a
              href="https://github.com/joaoacastro"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={40} />
            </a>
          </li>
          <li className={styles.contact_list}>
            <a
              href="https://www.instagram.com/jonnycastro/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram size={40} />
            </a>
          </li>
          <li className={styles.contact_list}>
            <a
              href="https://www.linkedin.com/in/joao-ac-castro/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size={40} />
            </a>
          </li>
          <li>
            <a
              href="mailto:joaoaccastro@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaEnvelope size={40} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
