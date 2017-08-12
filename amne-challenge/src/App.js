import React, { Component } from 'react';
import './App.css';

class App extends Component {
  amne() {
    let N = 5;
    let K = 3;
    let arr = [188930, 194123, 201345, 154243, 154243];

    console.log('N: ', N);
    console.log('K: ', K);
    console.log('arr: ', arr);

    let subArrs = [];
    let counter = 0;

    for (let i = 0; i < N; i++) {
      let tempArr = [];
      while (counter < K) {
        tempArr.push(arr[i]);
      }
      if (tempArr.length === K + 1) {
        subArrs.push(tempArr);
      }
    }


    return <div>cat</div>;
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Amne Challenge</h2>
        </div>
        <p className="App-intro">
          {this.amne()}
        </p>
      </div>
    );
  }
}

export default App;
