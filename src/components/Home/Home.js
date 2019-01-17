import React, { Component } from "react";
import Map from "../Map/Map";
import MapInfo from "../Map/MapInfo";
import MapInfo2 from "../Map/MapInfo2";
import Search from "../Map/Search";

import "./Home.css"
import pic from "../../home-pic.jpg";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="img-container">
        </div>
        <div className="project">
        <div className="project-name">Youth Connect</div>
        <div className="project-description">Search opportunities for NYC Youth </div>
        <div>Hello buddy</div>
        </div>
      </div>
    );
  }
}

export default Home;
