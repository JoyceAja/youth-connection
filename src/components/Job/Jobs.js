import React, { Component } from "react";
import Layout from "./jobLayout";
import axios from "axios";
import injectTapEventPlugin from "react-tap-event-plugin";

class Jobs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
      page: 0,
      loaded:false
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
          loaded:true
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleNext = () => {
    this.setState({
      page: this.state.page + 1
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
  };

  render() {
    const { jobs } = this.state;
    console.log('dataJobs' , jobs )
    return (
      <div>
        {/* <h1>Jobs</h1> */}
          <div>
            {console.log('getting here', jobs)}
            <Layout dataArr={jobs} />
            <button className="next change" onClick={this.handleNext}>
              NEXT
            </button>
          </div> 
      </div>
    );
  }
}
export default Jobs;
