import React, { useRef, useEffect, useState } from "react";
import ImageCarousel from "@components/ImageCarousel";
import ImageCarouselModal from "@components/ImageCarouselModal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Project = ({ title, description, techs, demo, github, images }) => {
  const [state, setState] = useState(false);
  const [toggleModal, setToggleModal] = useState(false);

  const observerRef = useRef(null);
  const boxRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        setState(entry.isIntersecting);
        if (entry.isIntersecting) observerRef.current.disconnect();
      },
      { threshold: 0.3 }
    );

    observerRef.current.observe(boxRef.current);
    return () => {
      observerRef.current.disconnect();
    };
  }, []);

  const handleToggleModal = (e) => {
    /*  e.stopPropagation; */
    setToggleModal((prevState) => !prevState);
  };

  return (
    <>
      <div
        ref={boxRef}
        className={`project-container ${state ? "visible" : ""}`}
      >
        <div className={`project`}>
          <h2 className="project-title">{title}</h2>
          <div className="project-carousel">
            <ImageCarousel images={images} onToggleModal={handleToggleModal} />
          </div>
          <div className="project-info">
            <p>{description}</p>
            <div className="project-techs">
              {techs.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
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
      {toggleModal && (
        <ImageCarouselModal images={images} onToggleModal={handleToggleModal} />
      )}
    </>
  );
};

export default Project;
