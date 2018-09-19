import React, { Component } from "react";
// import { Link, Switch, Route} from 'react-router-dom'
// import { GoogleMap } from "react-google-maps"
import Map from "../Map/Map";
import MapInfo from "../Map/MapInfo";
import MapInfo2 from "../Map/MapInfo2";
import Search from "../Map/Search";

import "./Home.css"
import pic from "../../home-pic.jpg";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      dataJob: [],
      dataAfter: [],
      searchVal: "",
      selectedSpotId: null,
      selectedASId: null
    };
  }


  // onSpotClick = spot => {
  //   console.log("HI selectedSpotId ", this.state.selectedSpotId);
  //   this.setState({ selectedSpotId: spot });
  // };

  // onSpotClick2 = spotAS => {
  //   console.log("HI spotAS ", this.state.selectedASId);
  //   this.setState({ selectedASId: spotAS });
  // };

  // handleText = e => {
  //   this.setState({ searchVal: e.target.value });
  // };

  // handleEnter = e => {
  //   e.preventDefault();
  //   const { searchVal } = this.state;
  //   this.props.history.push(`/search/${searchVal}`);
  // };

  render() {
    const { searchVal, selectedASId, selectedSpotId } = this.state;

    return (
      <div className="home">
        <div className="img-container">
        </div>
        <div className="project">
        <div className="project-name">Youth Connection</div>
        <div className="project-description">Search opportunities for NYC Youth </div>
        </div>

        {/* <form onSubmit={this.handleEnter}>
          <input
            className="searchTerm"
            type="text"
            value={searchVal}
            placeholder="program name"
            onInput={this.handleText}
          />
          <button type="submit" className="searchButton">
            <i class="fa fa-search" />
          </button>
        </form> */}

        {/* <fieldset className='map-container'>
            <legend>Map</legend>

             <Map onRatClick={this.onSpotClick} onRatClick2={this.onSpotClick2} />
            </fieldset>
            <div id='rat-info' className='strong'>
          {selectedSpotId ? MapInfo(selectedSpotId) : <p className='strong'>  </p>}
          
          <hr />
          {selectedASId ? MapInfo2(selectedASId) : <strong> </strong>}

        </div> */}
      </div>
    );
  }
}

export default Home;
