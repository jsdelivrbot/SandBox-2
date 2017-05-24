import React, { Component } from 'react'
import { Link } from 'react-router'

import RightHeaderGroup from '../RightHeaderGroup'
import './style.css'

class AppHeader extends Component {
  render() {
    return (
      <div className="header-container">
        <div className="left section">
          <div className="home">
            <Link to="/">Home</Link>
          </div>
        </div>
        <div className="right section">
          <RightHeaderGroup />
        </div>
      </div>
    )
  }
}

export default AppHeader
