import React, { useState } from "react";
import DemoNavigation from "@components/DemoNavigation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faEnvelope,
  faCircleInfo,
  faFolder,
} from "@fortawesome/free-solid-svg-icons";

import "@styles/Sidebar.scss";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(true);
  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };
  console.log(sidebar);
  return (
    <React.Fragment>
      <button onClick={toggleSidebar}>Click me</button>
      <div className={`sidebar${sidebar ? " open" : ""}`}>
        <div className="theme-button"></div>

        <hr />
        <DemoNavigation />
      </div>
    </React.Fragment>
  );
};

export default Sidebar;
