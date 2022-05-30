import React from "react";
import Projects from "@components/Projects";
import Contact from "@components/Contact";
import "@styles/Home.scss";

import profileImage from "@images/profile.jpg";

import backgroundImage from "@images/background.jpg";

const Home = () => {
  return (
    <div className="home">
      <div className="title">
        <div className="background-image">
          <div>
            <h1>Front End Developer</h1>
            <p>Hi!</p>
            <p>
              I am Ismael Pérez, a computer system engineer from Mexico who
              loves web development. I'm familiar with React and Angular
              frameworks for 1 year. I'm looking for a junior
              front-end/full-stack position, i like challenges in order to lear
              new skills.
            </p>
          </div>
        </div>
      </div>
      <div className="about">
        <h1>About me</h1>
        <div className="about-wrapper">
          <section className="about-info">
            <p>
              My name is Ismael Pérez Ortega, i'm 27 years old. I was born in
              Guadalajara, Mexico but now i live in Mexico City. After o
              graduating from
            </p>
            <p>Here are a few technologies I’ve been working with recently</p>
            <ul className="about-list">
              <li>Html</li>
              <li>CSS & (Sass)</li>
              <li>JavaScript (ES6+)</li>
              <li>Typescript</li>
              <li>React</li>
              <li>Angular</li>
              <li>Node.js</li>
              <li>Git</li>
            </ul>
          </section>
          <section className="about-photo">
            <img src={profileImage} alt="" />
          </section>
        </div>
      </div>
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
