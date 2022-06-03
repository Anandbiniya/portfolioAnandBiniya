import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./NavSocial.module.css";

const NavSocial = ({ socialClass, socialIcons }) => {
  return (
    <>
      <li className={`${styles[socialClass]}`}>
        <a
          href="https://github.com/Anandbiniya"
          className="socialIcons"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="My Github Portfolio."
        >
          <FontAwesomeIcon
            icon={["fab", "github"]}
            className={`${styles[socialIcons]}`}
          />
        </a>
      </li>
      <li className={`${styles[socialClass]}`}>
        <a
          href="https://www.linkedin.com/in/anandbin/"
          className="socialIcons"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="My Linkedin Profile."
        >
          <FontAwesomeIcon
            icon={["fab", "linkedin"]}
            className={`${styles[socialIcons]}`}
          />
        </a>
      </li>
      <li className={`${styles[socialClass]}`}>
        <a
          href="mailto:anand.biniya@gmail.com"
          className="socialIcons"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="My Linkedin email."
        >
          <FontAwesomeIcon
            icon="envelope"
            className={`${styles[socialIcons]}`}
          />
        </a>
      </li>
      <li className={`${styles[socialClass]}`}>
        <a
          href="tel:+91 8861577949"
          className="socialIcons"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="My Linkedin contact"
        >
          <FontAwesomeIcon icon="phone" className={`${styles[socialIcons]}`} />
        </a>
      </li>
      <li className={`${styles[socialClass]}`}>
        <a
          href="https://drive.google.com/file/d/1DeCRD3TOJsabgG_gabRm3YlQ3hWeCJcj/view?usp=sharing"
          className="socialIcons"
          target="_blank"
          rel="noreferrer"
          aria-label="My Linkedin resume"
        >
          <FontAwesomeIcon icon="file" className={`${styles[socialIcons]}`} />
        </a>
      </li>
    </>
  );
};

export default NavSocial;

//this list done
