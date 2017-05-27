import React from 'react'
import { Link } from 'react-router'

import './style.css'

class IndexMenu extends React.Component {
  render() {
    return (
      <div className="zzz app-container">
        <div className="zzz index-title">
          Index
        </div>
        <div className="zzz index-tab">
          <Link to="/sections/1">Section One</Link>
        </div>
        <div className="zzz index-tab">
          <Link to="/sections/2">Section Two</Link>
        </div>
        <div className="zzz index-tab">
          <Link to="/sections/3">Section Three</Link>
        </div>
        <div className="zzz index-tab">
          <Link to="/sections/4">Section Four</Link>
        </div>
        <div className="zzz index-tab">
          <Link to="/sections/5">Section Five</Link>
        </div>
        <div className="zzz index-tab">
          <Link to="/sections/6">Section Six</Link>
        </div>
      </div>
    )
  }
}

export default IndexMenu
