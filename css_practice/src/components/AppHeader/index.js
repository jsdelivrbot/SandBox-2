import React, { Component } from 'react'
import { Link } from 'react-router'

import RightHeaderGroup from '../RightHeaderGroup'
import './style.css'

class AppHeader extends Component {
  render() {
    return (
      <div className="zzz header-container">
        <div className="zzz left section">
          <div className="zzz home">
            <Link to="/">Home</Link>
          </div>
        </div>
        <div className="zzz right section">
          <RightHeaderGroup />
        </div>
      </div>
    )
  }
}

export default AppHeader
