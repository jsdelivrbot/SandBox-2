import React from 'react'
import { Link } from 'react-router'

import './style.css'

const RightHeaderGroup = () => {
  return (
    <div className="zzz right-button-group">
      <a
        className="zzz header-button linkedin"
        href="https://www.linkedin.com/in/tom-ogasawara"
      >
        <i className="fa fa-linkedin header-icon" aria-hidden="true" />
      </a>
      <a
        className="zzz header-button github"
        href="https://www.github.com/tom-ogasawara"
      >
        <i className="fa fa-github header-icon" aria-hidden="true" />
      </a>
      <a
        className="zzz header-button portfolio"
        href="http://www.tom-ogasawara.com"
      >
        <i className="fa fa-folder-open header-icon" aria-hidden="true" />
      </a>
      <a
        className="zzz header-button email"
        href="mailto:tom.ogasawara@gmail.com"
      >
        <i className="fa fa-envelope header-icon" aria-hidden="true" />
      </a>
      <Link className="zzz header-button resume" to="/resume">
        <i className="fa fa-file-text header-icon" aria-hidden="true" />
      </Link>
    </div>
  )
}

export default RightHeaderGroup
