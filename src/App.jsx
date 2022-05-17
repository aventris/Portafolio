import React from "react";
import Home from "@components/Home";
import Demo from "./pages/Demo";
import Contact from "@components/Contact";

import "@styles/App.scss";
import Sidebar from "./layout/Sidebar";

const App = () => {
  return (
    <React.Fragment>
      <Sidebar />
      <div className="maincontent">
        <Home />
        {/* <Demo /> */}
        <Contact />
      </div>
    </React.Fragment>
  );
};

export default App;
