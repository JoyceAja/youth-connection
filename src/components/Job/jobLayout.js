import React from "react";

import "./Job.css"

class Jobs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      id: null
    };
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="title-box">
            <div className="title">JOBS AND INTERNSHIPS</div>
          </div>
          {this.props.dataArr.map((el, idx) => (
            <div className="job-box box">
                <div className="job-name name job">{`Agency: ${el.agency}`} </div>
                <div className="job-borough job">{`Borough community: ${el.borough_community}`}</div>
                <div className="job-address job">{`Address: ${el.address}`}</div>
                <div className="job-contact job">{`Contact Number: ${el.contact_number}`}</div>
                <div className="job-program job">{`Program: ${el.program}`}</div>
                <div className="job-type job">{`Program Type: ${el.program_type}`}</div>
                <div className="job-site job">{`Site name: ${el.site_name}`}</div>
              </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Jobs;