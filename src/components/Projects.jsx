import React, { useState } from "react";

import Project from "./Project";
import { projectInfo } from "@utils/projectInfo";

import "@styles/Projects.scss";

const Projects = () => {
  const [state, setState] = useState(true);

  const toggle = () => {
    setState(!state);
  };
  return (
    <section className="projects">
      <h1>Proyects</h1>
      <button onClick={toggle}>Click me</button>

      <Project {...projectInfo.yardSale} />
      <Project {...projectInfo.todo} />
    </section>
  );
};

export default Projects;
