import React, { Component } from "react";
import Layout from "../Layout/Layout";

class AfterSchool extends Component {
  constructor() {
    super();
    this.state = {
      dataAfter: [],
      allJobs: [],
      filteredJobs: [],
      page: 0,
      loaded: false
    };
  }

  dataActivties = () => {
    fetch(
      `https://data.cityofnewyork.us/resource/mbd7-jfnc.json?$where=latitude > 1&$limit=5&$offset=${this
        .state.page * 5}`
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log("setState: ", this.setState);

        this.setState({
          dataAfter: data,
          loaded: true
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleActs = () => {
    fetch("https://data.cityofnewyork.us/resource/mbd7-jfnc.json?$where=latitude > 1")
      .then(response => response.json())
      .then(data => {
        this.setState({
          allJobs: data
        });
      });
  };

  componentDidMount() {
    this.dataActivties();
    this.handleActs();

    this.setState({
      page:1
    })
  }

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

  handleNext = e => {
    e.preventDefault();
    this.setState({
      page: this.state.page + 1
    });

    this.dataActivties();
  };
  
  handlePrev = e => {
    e.preventDefault();
    this.setState({
      page: this.state.page - 1
    });
    this.dataActivties();
  };

  render() {
    const { page, searchVal, filteredJobs, dataAfter } = this.state;

    return (
      <div>
        <div className="title-box">
          <div className="title">AFTERSCHOOL ACTIVITIES</div>
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
            <Layout dataArr={dataAfter} />
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
    );
  }
}

export default AfterSchool;
