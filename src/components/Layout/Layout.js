import React from "react";

import "./Layout.css"

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
          {this.props.dataArr.map((el, idx) => (
            <div className="job-box box">
              <div className="sub-header">Agency</div>
                <div className="job-name title-header">{el.agency} </div>
                <div className="job-address job">{`${el.address}, ${el.borough_community}`}</div>
                <div className="job-contact job">{`${el.contact_number}`}</div>
                <div className="sub-header">Employment Site</div>
                <div className="job-site title-header">{`${el.site_name}`}</div>
                <div className="job-program job">{`${el.program}`}</div>
              </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Jobs;