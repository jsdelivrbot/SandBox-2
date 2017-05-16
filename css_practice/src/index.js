import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import App from './App';
import './index.css';

const Root = () => {
  return (
      <Router history={hashHistory}>
        <Route path="/" component={App}>
        </Route>
      </Router>
  )
}

ReactDOM.render(
  <Root />,
  document.getElementById('root')
)


// <IndexRoute component={SongList} />
// <Route path="songs/new" component={SongCreate} />
// <Route path="songs/:id" component={SongDetail} />
