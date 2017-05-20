import React, { Component } from 'react'
import { Link } from 'react-router'

import './style.css'

class AppHeader extends Component {
  render() {
    return (
      <div className="header-container">
        <div className="left section">
          left
        </div>
        <div className="right section">
          right
        </div>
      </div>
    )
  }
}

export default AppHeader
