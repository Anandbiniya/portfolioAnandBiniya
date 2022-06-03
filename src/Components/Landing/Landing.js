import React from "react";
import Fade from "react-reveal/Fade";
import smoothscroll from "smoothscroll-polyfill";
import Button from "../Utilities/Button";
import main from "../../Assets/img/main.jpg";
import { HashLink as Link } from "react-router-hash-link";
import styles from "./Landing.module.css";

const Landing = () => {
  smoothscroll.polyfill();
  return (
    <header id="landing" className={`${styles.landing} ${"container"}`}>
      <Fade>
        <section className={styles.welcome}>
          <h1>
            <span>Hello!</span>
            <br />
            <span> I am Anand Biniya</span>
          </h1>
          <h2>I'm an aspiring Full Stack Developer based in India.</h2>
          <Link smooth to="/#projects">
            <Button input={"See my work"} />
          </Link>
        </section>
        <section className={styles.avatar}>
          <img src={main} alt="My Avatar" />
        </section>
      </Fade>
    </header>
  );
};

export default Landing;
