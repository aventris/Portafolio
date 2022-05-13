import React, { useState } from "react";

import "@styles/Projects.scss";
import ImageCarousel from "@components/ImageCarousel";
import { yardSaleImages, todoImages } from "@utils/projectImages";

const Projects = () => {
  const [state, setState] = useState(true);

  const toggle = () => {
    setState(!state);
  };
  return (
    <section className="projects">
      <h1>Proyects</h1>
      <button onClick={toggle}>Click me</button>
      <div className={`project-container ${state ? "visible" : ""}`}>
        <div className={`project`}>
          <div className="project-carousel">
            <ImageCarousel images={yardSaleImages} />
          </div>
          <div className="project-info">
            <h2>Yard Sale</h2>
            <h4>Teconogies used:</h4>
            <p>Angular | Scss | Typescript</p>
            <h4>Project description:</h4>
            <p>
              A functional online shop. You can add items to your cart, proceed
              to checkout and Paypal payment, it also has a user profile page.
              You can login as a user or administrator. The administrator has
              it's own section to mage products, users and orders.
            </p>
          </div>
        </div>
      </div>
      <div className={`project-container ${state ? "visible" : ""}`}>
        <div className={`project`}>
          <div className="project-carousel">
            <ImageCarousel images={todoImages} />
          </div>
          <div className="project-info">
            <h2>Yard Sale</h2>
            <h4>Teconogies used:</h4>
            <p>Angular | Scss | Typescript</p>
            <h4>Project description:</h4>
            <p>
              A functional online shop. You can add items to your cart, proceed
              to checkout and Paypal payment, it also has a user profile page.
              You can login as a user or administrator. The administrator has
              it's own section to mage products, users and orders.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
