import React from "react";
import Home from "@components/Home";
import Demo from "./pages/Demo";

import Layout from "./layout/Layout";

import "@styles/App.scss";
import ImageCarousel from "./components/ImageCarousel";

const App = () => {
  console.log("Holis");
  return (
    <React.Fragment>
      <Layout>
        {/* <Home /> */}
        <Demo />
      </Layout>
    </React.Fragment>
  );
};

export default App;
