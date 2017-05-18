import React from 'react'
import { Link } from 'react-router'

class IndexPage extends React.Component {
  render() {
    return (
      <div>
        Index Page
        <div>
          <Link to="/sections/1">Section One</Link>
        </div>
        <div>
          <Link to="/sections/2">Section Two</Link>
        </div>
      </div>
    )
  }
}

export default IndexPage
