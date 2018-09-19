import React from "react";
import PropTypes from "prop-type";

import "./Layout.css";

class Layout extends React.Component {
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
              <div className="job-address job">{el.address? `${el.address}, ${el.borough_community}`: el.borough_community}</div>
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

// Layout.propTypes = {
//   dataArr: PropTypes.array(
//     PropTypes.shape({
//       agency: PropTypes.string.isRequired,
//       address: PropTypes.string.isRequired,
//       borough_community: PropTypes.string.isRequired,
//       contact_number: PropTypes.number.isRequired,
//       site_name: PropTypes.string.isRequired,
//       program: PropTypes.string.isRequired
//     }).isRequired
//   ).isRequired
// };

export default Layout;