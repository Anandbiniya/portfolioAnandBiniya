import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";

import ticSm from "../../../Assets/img/Portfolio items/demo.gif";
import ticLg from "../../../Assets/img/Portfolio items/demo.gif";
import weather from "../../../Assets/img/Portfolio items/weather.gif";

import Interntheory from "../../../Assets/img/Portfolio items/Interntheory.png";
import Sportsjam from "../../../Assets/img/Portfolio items/Sportsjam.png";

import ProjectItem from "./ProjectItem";

import styles from "./ProjectContainer.module.css";

import html from "../../../Assets/img/logos/js.svg";
import css from "../../../Assets/img/logos/css.svg";
import js from "../../../Assets/img/logos/js.svg";
import react from "../../../Assets/img/logos/react.svg";
import coschedule from "./images/cosche.png";
import bathwork from "./images/bath.png";
import crazy from "./images/crazy.jpg";
import apple from "./images/Apple.png";
import starwars from "./images/Starwars.png";
import Theme from "./images/Theme.png";
import ResponsiveTask from "./images/responsiveTaskbar.png";
import employee from "./images/employee.png";
import BestBuy from "./images/BestBuy.png";
import Toggl from "./images/Toggl.png";
import mobilelauncher from "./images/MobileLauncher.png";
import quiz from "./images/quiz.png";

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
    {
      image: [starwars, starwars],
      alt: "StarWars App",
      heading: "Starwars App",
      p1: "A website which is used for entertainment purpose.We have created this with HTML,CSS , React and Chakra UI",
      l1: "https://github.com/Anandbiniya/Starwars",
      a1: "Github page for a project.",
      l2: "https://spectacular-tiramisu-e1e1b5.netlify.app/",
      a2: "Weather App live website",
      tech: [html, css, js],
    },
    {
      image: [Theme, Theme],
      alt: "Theme light",
      heading: "Theme light",
      p1: "A theme light when we hover on button it will be glow",
      l1: "https://github.com/Anandbiniya/CSS-Animation",
      a1: "Github page for a project.",
      l2: "https://lively-smakager-47a307.netlify.app/",
      a2: "Weather App live website",
      tech: [html, css, js],
    },
    {
      image: [ResponsiveTask, ResponsiveTask],
      alt: "Responsive Task",
      heading: "Responsive Task",
      p1: "A Responsive Taskbar ",
      l1: "https://github.com/Anandbiniya/CSS-Animation/tree/main/welcome",
      a1: "Github page for a project.",
      l2: "https://rainbow-unicorn-ce7f3a.netlify.app/",
      a2: "Weather App live website",
      tech: [html, css],
    },
    {
      image: [employee, employee],
      alt: "Employement Table",
      heading: "Employement Table",
      p1: "Employement Table where we add employemnet details and delete,edit   ",
      l1: "https://github.com/Anandbiniya/employee-table",
      a1: "Github page for a project.",
      l2: "https://melodic-paprenjak-56cdfb.netlify.app/",
      a2: "Weather App live website",
      tech: [html, css, js],
    },
    {
      image: [BestBuy, BestBuy],
      alt: "BestBuy",
      heading: "BestBuy",
      p1: "Best Buy’s e-commerce website which sells a range of consumer electronic goods.   ",
      l1: "https://github.com/Dreamboy-26/Best-Buy",
      a1: "Github page for a project.",
      l2: "https://melodic-paprenjak-56cdfb.netlify.app/",
      a2: "Weather App live website",
      tech: [html, css, js],
    },
    {
      image: [Toggl, Toggl],
      alt: "Toggl track",
      heading: "Toggl track",
      p1: "Toggl Track is a time tracking software operated by Toggl OÜ, headquartered in Tallinn, Estonia, that offers online time tracking and reporting services through their website along with mobile and desktop applications. Toggl Track tracks time blocks, optionally labeled with a task, a project, and tags.   ",
      l1: "https://github.com/Goluchandan/concerned-picture-9849",
      a1: "Github page for a project.",
      l2: "https://concerned-picture-9849.netlify.app/",
      a2: "Weather App live website",
      tech: [html, css, js],
    },
    {
      image: [mobilelauncher, mobilelauncher],
      alt: "Mobile Launcher",
      heading: "Mobile Launcher",
      p1: "A mobile launcher with css effects",
      l1: "https://github.com/Anandbiniya/modile-luncher",
      a1: "Github page for a project.",
      l2: "https://exquisite-granita-336787.netlify.app/",
      a2: "Weather App live website",
      tech: [html, css, js],
    },
    {
      image: [quiz, quiz],
      alt: "Quiz app",
      heading: "Quiz app",
      p1: "A quiz app for multiple choices",
      l1: "https://github.com/masai-course/biniya_fw13_025/tree/master/quiz-main",
      a1: "Github page for a project.",
      l2: "https://iridescent-druid-f9b9c5.netlify.app/",
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
