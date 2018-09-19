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
      loaded: false
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

  handleNext = (e) => {
    e.preventDefault()
    this.setState({
      page: this.state.page + 1
    });
    this.dataJobs();
  };

  handlePrev = (e) => {
    e.preventDefault()
    this.setState({
      page: this.state.page - 1
    });
    this.dataJobs();
  };

  //   filterBorough=(placeholder)=>{
  //       let {dataJobs} = this.state
  //         let obj = {
  //             queens: dataJobs.filter(point => point.borough_community === 'Queens' && 'Long Island  City'),
  //             manhattan: dataJobs.filter(point => point.borough_community === 'Manhattan' && 'New York'),
  //             bronx: dataJobs.filter(point => point.borough_community === 'Bronx'),
  //             si: dataJobs.filter(point => point.borough_community === 'Staten Island'),
  //             brooklyn: dataJobs.filter(point => point.borough_community === 'Brooklyn'),

  //         }
  //         return obj[placeholder]
  //     }

  componentDidMount = () => {
    this.dataJobs();
    this.setState({
        page:1
    })
  };

  render() {
    const { jobs, page } = this.state;
    return (
      <div>
        <div>
        <div className="title-box">
            <div className="title">JOBS AND INTERNSHIPS</div>
          </div>
          <Layout dataArr={jobs} />
          <button className="next change" onClick={this.handleNext}>
            NEXT
          </button>
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
