import React, { useState } from "react";

import Project from "./Project";
import { projectInfo } from "@utils/projectInfo";

import "@styles/Projects.scss";

const Projects = () => {
  return (
    <div className="projects" id="project">
      <h1>Projects</h1>
      <div id="react">
        <h2>React</h2>
        {projectInfo.react.map((project) => (
          <Project key={project.title} {...project} />
        ))}
      </div>
      <div id="angular">
        <h2>Angular</h2>
        {projectInfo.angular.map((project) => (
          <Project key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
