import React from "react";
import ImageCarousel from "@components/ImageCarousel";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Project = ({ title, description, techs, demo, github, images }) => {
  const state = true;

  return (
    <div className={`project-container ${state ? "visible" : ""}`}>
      <div className={`project`}>
        <div className="project-carousel">
          <ImageCarousel images={images} />
        </div>
        <div className="project-info">
          <h2>{title}</h2>
          <h4>Teconogies used:</h4>
          <p>{techs}</p>
          <h4>Project description:</h4>
          <p>{description}</p>
        </div>
        <div className="project-demo">
          <a className="project-demo-card" href={demo} target="_blank">
            <p>Live Demo</p>
            <FontAwesomeIcon icon={faPlay} />
          </a>
          <a className="project-demo-card" href={github} target="_blank">
            <p>Code</p>
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
