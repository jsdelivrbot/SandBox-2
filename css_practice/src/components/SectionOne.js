import React from 'react';
import { Link } from 'react-router'

class SectionOne extends React.Component {

  render() {
    return (
      <div>
        <div><Link to="/">Back</Link></div>
        Section One
      </div>
    );
  }
}

export default SectionOne;
