import React from 'react'
import { Link } from 'react-router'

import './style.css'

class IndexPage extends React.Component {
  render() {
    return (
      <div className="zzz app-container">
        <div className="zzz app-sub-container">
          <div className="zzz index-sidebar">
            <div className="zzz index-title">
              Index
            </div>
            <div className="zzz index-tab">
              <Link to="/sections/1">Section One</Link>
            </div>
            <div className="zzz index-tab">
              <Link to="/sections/2">Section Two</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default IndexPage
