import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";

import ticSm from "../../../Assets/img/Portfolio items/demo.gif";
import ticLg from "../../../Assets/img/Portfolio items/demo.gif";
import weather from "../../../Assets/img/Portfolio items/weather.gif";

import Interntheory from "../../../Assets/img/Portfolio items/Interntheory.png";
import Sportsjam from "../../../Assets/img/Portfolio items/Sportsjam.png";

import ProjectItem from "./ProjectItem";

import styles from "./ProjectContainer.module.css";

import html from "../../../Assets/img/logos/html.svg";
import css from "../../../Assets/img/logos/css.svg";
import js from "../../../Assets/img/logos/js.svg";
import react from "../../../Assets/img/logos/react.svg";
import coschedule from "./images/cosche.png";
import bathwork from "./images/bath.png";
import crazy from "./images/crazy.jpg";
import apple from "./images/Apple.png";

const ProjectContainer = () => {
  const { isLight } = useContext(ThemeContext);
  const projects = [
    {
      image: [coschedule, coschedule],
      alt: "Coschedule.com",
      heading: "Coschedule.com_web_clone",
      p1: "This is a clone of Coschedule.com, where we  can use this website for scheduling our time.For this we website we used have used HTML, CSS, and Javascript to achieve this.",
      l1: "https://github.com/mohan-palleti/CoSchedule-clone",
      a1: "Github page for a project.",
      l2: "https://coscheduleclone.netlify.app/",
      a2: "Interntheory.com_web_clone",
      tech: [html, css, js],
    },
    {
      image: [bathwork, bathwork],
      alt: "bathandbodyworks",
      heading: "bathandbodyworks-clone",
      p1: "This is a clone of Appletv.comm, this website used for entertainment purpose.where we have used HTML, CSS, Javascript to achieve this.",
      l1: "https://github.com/rushig777/bathandbodyworks-clone",
      a1: "Github page for a lynda project.",
      l2: "https://singular-kleicha-5eef4a.netlify.app/",
      a2: "sportsjam live website.",
      tech: [html, css, js, react],
    },
    {
      image: [crazy, crazy],
      alt: "basic movie app",
      heading: "basic movie app",
      p1: "Tried to create basic movie app where you can search and find link of movies.This is done with Html,css,Java script",
      l1: "",
      a1: "Github page for a project.",
      l2: "https://sharp-goldwasser-129cb5.netlify.app/",
      a2: "Crazy boys ",
      tech: [html, css, js],
    },
    {
      image: [apple, apple],
      alt: "Appletv App",
      heading: "Apple tv App",
      p1: "A website which is used for entertainment purpose.We have created this with HTML,CSS and Java script",
      l1: "https://github.com/RaviRanjan02/AppleTv",
      a1: "Github page for a project.",
      l2: "https://lucid-ritchie-187c42.netlify.app/",
      a2: "Weather App live website",
      tech: [html, css, js],
    },
  ];
  return (
    <div className={`${styles.projectContainer} ${!isLight && styles.dark}`}>
      {projects.map((data, index) => {
        return <ProjectItem data={data} index={index} key={index} />;
      })}
    </div>
  );
};

export default ProjectContainer;
