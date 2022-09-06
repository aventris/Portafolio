import React from "react";
import { HashRouter } from "react-router-dom";
import Home from "@components/Home";

import "@styles/App.scss";
import Sidebar from "./layout/Sidebar";
import BackgroundAnimation from "@components/BackgroundAnimation";

const App = () => {
  return (
    <HashRouter>
      <Sidebar />
      <div className="maincontent" id="aux">
        <Home />
        {/* <Demo /> */}
        <BackgroundAnimation />
      </div>
    </HashRouter>
  );
};

export default App;
