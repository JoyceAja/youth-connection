import React, { Component } from "react";
import Layout from "../Layout/Layout";
import axios from "axios";
import injectTapEventPlugin from "react-tap-event-plugin";

class Jobs extends Component {
  constructor() {
    super();
    this.state = {
      jobs: [],
      page: 0,
      loaded: false,
      searchVal: "",
      allJobs: [],
      filteredJobs: []
    };
  }

  dataJobs = () => {
    fetch(
      `https://data.cityofnewyork.us/resource/6fic-ympf.json?$limit=5&$offset=${this
        .state.page * 5}`
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log("data", data);
        this.setState({
          jobs: data,
          loaded: true
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleJobs = () => {
    fetch("https://data.cityofnewyork.us/resource/6fic-ympf.json")
      .then(response => response.json())
      .then(data => {
        console.log("data", data);
        this.setState({
          allJobs: data
        });
      });
  };

  handleNext = e => {
    e.preventDefault();
    this.setState({
      page: this.state.page + 1
    });
    this.dataJobs();
  };

  handlePrev = e => {
    e.preventDefault();
    this.setState({
      page: this.state.page - 1
    });
    this.dataJobs();
  };

  handleText = e => {
    const { searchVal, allJobs } = this.state;
    const arr = allJobs.filter(el =>
      el.borough_community.includes(e.target.value)
    );
    this.setState({
      searchVal: e.target.value,
      filteredJobs: arr
    });
  };

  handleEnter = e => {
    e.preventDefault();
    const { searchVal, allJobs } = this.state;
  };

  componentDidMount = () => {
    this.dataJobs();
    this.handleJobs();
    this.setState({
      page: 1
    });
  };

  render() {
    const { jobs, page, searchVal, filteredJobs } = this.state;
    return (
      <div>
        <div>
          <div className="title-box">
            <div className="title">JOBS AND INTERNSHIPS</div>
          </div>

          <div className="search-box">
            <form onSubmit={this.handleEnter}>
              <input
                className="searchTerm"
                type="text"
                value={searchVal}
                placeholder="Location"
                onInput={this.handleText}
              />
              <button type="submit" className="searchButton">
                <i class="fa fa-search" />
              </button>
            </form>
          </div>
          {searchVal ? (
            <Layout dataArr={filteredJobs} />
          ) : (
            <Layout dataArr={jobs} />
          )}
          {filteredJobs.length > 0 ? (
            ""
          ) : (
            <button className="next change" onClick={this.handleNext}>
              NEXT
            </button>
          )}
          {page > 1 ? (
            <button className="prev change" onClick={this.handlePrev}>
              Prev
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}
export default Jobs;
