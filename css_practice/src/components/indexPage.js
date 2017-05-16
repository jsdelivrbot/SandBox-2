import React from 'react';
import PageOne from './pageOne'
import PageTwo from './pageTwo'

class IndexPage extends React.Component {

  render() {
    return (
      <div>
        Index Page
        <PageOne />
        <PageTwo />
      </div>
    );
  }
}

export default IndexPage;
