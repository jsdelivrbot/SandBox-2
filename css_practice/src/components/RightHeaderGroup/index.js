import React from 'react'
import { Link } from 'react-router'

import './style.css'

const RightHeaderGroup = () => {
  return (
    <div className="zzz right-button-group">
      <a
        className="zzz header-button linkedin"
        href="https://www.linkedin.com/in/tom-ogasawara"
      />
      <a
        className="zzz header-button github"
        href="https://www.github.com/tom-ogasawara"
      />
      <a
        className="zzz header-button portfolio"
        href="https://www.tom-ogasawara.com"
      />
      <a
        className="zzz header-button email"
        href="mailto:tom.ogasawara@gmail.com"
      />
      <Link className="zzz header-button resume" to="/resume" />
    </div>
  )
}

export default RightHeaderGroup
