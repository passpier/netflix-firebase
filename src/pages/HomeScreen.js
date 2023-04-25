import React from "react";
import "./HomeScreen.module.css";
import Banner from "./Banner";
import Nav from "./Nav";

function HomeScreen() {
  return (
    <div className="HomeScreen">
      <Nav />
      <Banner />
    </div>
  );
}

export default HomeScreen;
