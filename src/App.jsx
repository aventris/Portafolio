import React, { useEffect, useState } from "react";

import Home from "@components/Home";
import Demo from "./pages/Demo";
import Contact from "@components/Contact";

import "@styles/App.scss";
import Sidebar from "./layout/Sidebar";
import BackgroundAnimation from "@components/BackgroundAnimation";

const App = () => {
  return (
    <React.Fragment>
      <Sidebar />
      <div className="maincontent" id="aux">
        <Home />
        {/* <Demo /> */}
        <BackgroundAnimation />
      </div>
    </React.Fragment>
  );
};

export default App;
