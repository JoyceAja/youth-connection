import React, { Component } from "react";
import Layout from "../Layout/Layout";

// import "../Layout/Layout.css";

class AfterSchool extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataAfter: [],
      page: 0,
      loaded:false
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
          loaded:true
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.dataActivties();
  }

  handleNext = (e) => {
      e.preventDefault()
    this.setState({
      page: this.state.page + 1
    });

    this.dataActivties();
  };
  handlePrev = (e) => {
    e.preventDefault()
    this.setState({
      page: this.state.page - 1
    });
    this.dataActivties();
  };

  render() {
    console.log(" Activties: ", this.state.dataAfter);
    const { page } = this.state

    return (
      <div>
         <div className="title-box">
            <div className="title">AFTERSCHOOL ACTIVITIES</div>
          </div>
        <Layout dataArr={this.state.dataAfter} />
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
    );
  }
}

export default AfterSchool;
