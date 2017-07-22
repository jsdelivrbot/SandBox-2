import React, { Component } from "react";
import { Link } from "react-router";

import RightHeaderGroup from "../RightHeaderGroup";
import "./style.css";

class AppHeader extends Component {
  render() {
    return (
      <div className="zzz header-container">
        {/* <div className="zzz left section">
          <div className="zzz home-button">
            <Link to="/">
            <div className="header-button">
              <i className="fa fa-home header-icon" aria-hidden="true" />
            </div>
            </Link>
          </div>
        </div>
        <div className="zzz right section">
          <RightHeaderGroup />
        </div> */}
      </div>
    );
  }
}

export default AppHeader;
