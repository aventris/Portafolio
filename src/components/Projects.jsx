import React, { useState } from "react";

import Project from "./Project";
import { projectInfo } from "@utils/projectInfo";

import "@styles/Projects.scss";

const Projects = () => {
  const [state, setState] = useState(true);
  console.log(state);
  const toggle = () => {
    setState(!state);
  };
  return (
    <div className="projects">
      <h1>Projects</h1>
      <button onClick={toggle}>Click me</button>

      <Project {...projectInfo.yardSale} state={state} />
      <Project {...projectInfo.todo} state={state} />
      <Project {...projectInfo.memorama} state={state} />
    </div>
  );
};

export default Projects;
