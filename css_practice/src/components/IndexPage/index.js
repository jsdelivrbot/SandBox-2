import React from 'react'
import { Link } from 'react-router'

import './style.css'

class IndexPage extends React.Component {
  render() {
    return (
      <div className="app-container">
        <div className="app-sub-container">
          <div className="index-sidebar">
            <div className="index-title">
              Index
            </div>
            <div className="index-tab">
              <Link to="/sections/1">Section One</Link>
            </div>
            <div className="index-tab">
              <Link to="/sections/2">Section Two</Link>
            </div>
          </div>
          <div className="content-body">
            content here
          </div>
        </div>
      </div>
    )
  }
}

export default IndexPage
