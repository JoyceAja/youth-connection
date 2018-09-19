import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Jobs from "./components/Job/Jobs";
import Activities from "./components/Activities/Activities";
// import Search from "./components/Map/Search";
import Location from "./components/Map/Location";

import Header from "./components/Header/header";

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Header />
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/jobs" component={ Jobs } />
          <Route path="/activities" component={ Activities } />
          <Route path="/location" component={ Location } />
        </Switch>
      </div>
    );
  }
}

export default App;
