import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faEnvelope,
  faCircleInfo,
  faFolder,
  faCircle,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";

import "@styles/Header.scss";

const Header = () => {
  const [lightTheme, setLightTheme] = useState(false);
  const handleTheme = () => {
    setLightTheme(!lightTheme);
  };
  return (
    <ul className="header">
      <li>
        <FontAwesomeIcon icon={faHouse} className="header-icon" />
        Home
      </li>
      <li>
        <FontAwesomeIcon icon={faCircleInfo} className="header-icon" />
        About
      </li>
      <li>
        <FontAwesomeIcon icon={faFolder} className="header-icon" />
        Projects
      </li>
      <li>
        <FontAwesomeIcon icon={faEnvelope} className="header-icon" />
        Contact
      </li>
      <li>
        <div className="theme-container" onClick={handleTheme}>
          <FontAwesomeIcon icon={faMoon} className="theme-icon" />
          <FontAwesomeIcon icon={faSun} className="theme-icon" />
          <FontAwesomeIcon
            icon={faCircle}
            className={`theme-ball${lightTheme ? " light" : ""}`}
          />
        </div>
      </li>
    </ul>
  );
};

export default Header;
