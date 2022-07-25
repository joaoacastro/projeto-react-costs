import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
        <li>
          <a className={styles.a_footer} href="http://www.facebook.com" target="_blank" rel="noreferrer">
            <FaFacebook />
          </a>
        </li>
        <li>
          <a className={styles.a_footer} href="http://www.instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
        </li>
        <li>
          <a className={styles.a_footer} href="http://www.linkedin.com" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
        </li>
      </ul>
      <p className={styles.copy_right}>
        <span>Costs</span> &copy; 2022
      </p>
    </footer>
  );
}
export default Footer;
