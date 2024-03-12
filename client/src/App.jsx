import React from "react";
import Posts from "./components/Posts";
import Navbar from "./components/BlogNav";
import "./App.css";

const App = () => {
  return (
    <div className="main-container" style={{ backgroundColor: "aliceblue" }}>
      <Navbar />
      <Posts />
    </div>
  );
};

export default App;
