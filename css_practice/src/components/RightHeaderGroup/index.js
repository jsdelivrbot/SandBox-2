import React from 'react'
import { Link } from 'react-router'

import './style.css'

const RightHeaderGroup = () => {
  return (
    <div className="right-button-group">
      <a
        className="header-button linkedin"
        href="https://www.linkedin.com/in/tom-ogasawara"
      />
      <a
        className="header-button github"
        href="https://www.github.com/tom-ogasawara"
      />
      <a
        className="header-button portfolio"
        href="https://www.tom-ogasawara.com"
      />
      <a
        className="header-button email"
        href="mailto:tom.ogasawara@gmail.com"
      />
      <Link className="header-button resume" to="/resume" />
    </div>
  )
}

export default RightHeaderGroup
