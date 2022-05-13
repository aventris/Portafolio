import React from "react";
import Projects from "@components/Projects";

import "@styles/Home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="background-image">
        <div className="background-pannel">
          <h1>Front End Developer</h1>
          <p>Hi!</p>
          <p>
            I am Ismael Pérez, a computer system engineer from Mexico who loves
            web development. I'm familiar with React and Angular frameworks for
            1 year. I'm looking for a junior front-end/full-stack position, i
            like challenges in order to lear new skills.
          </p>
        </div>
      </div>
      <div>
        <h1>About me</h1>
        <p>
          My name is Ismael Pérez Ortega, i'm 27 years old. I was born in
          Guadalajara, Mexico but now i live in Mexico City. After o graduating
          from
        </p>
      </div>
      <p>Here are a few technologies I’ve been working with recently</p>
      <ul>
        <li>Html</li>
        <li>CSS & (Sass)</li>
        <li>JavaScript (ES6+)</li>
        <li>React</li>
        <li>Angular</li>
        <li>Node.js</li>
      </ul>
      <Projects />
    </div>
  );
};

export default Home;
