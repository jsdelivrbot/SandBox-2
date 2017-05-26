import React from 'react';
import { Link } from 'react-router'

class SectionOne extends React.Component {

  render() {
    return (
      <div>
        <div><Link to="/">Back</Link></div>
        Section One
        <div className="zzz content-container">
          Section one content goes here
        </div>
      </div>
    );
  }
}

export default SectionOne;
