import "react-toastify/dist/ReactToastify.css";

import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";

import NavSocial from "../../Navigation/NavSocial/NavSocial.js";

import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const { isLight } = useContext(ThemeContext);
  const theme = !isLight ? styles.dark : "";
  return (
    <footer className={`${styles.footer} ${theme}`}>
      <ul className={styles.iconContainer}>
        <NavSocial socialClass={""} socialIcons={"footerSocialIcons"} />
      </ul>

      <div className={styles.copyright}>
        <small>8861577949</small>
        <br />
        <small>anand.biniya@gmail.com</small>
      </div>
    </footer>
  );
};

export default ContactForm;
