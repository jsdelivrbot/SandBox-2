import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import App from './components/App'
import IndexPage from './components/indexPage'
import PageOne from './components/pageOne'
import PageTwo from './components/pageTwo'
import './index.css'

const Root = () => {
  return (
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={IndexPage} />
          <Route path="pages/1" component={PageOne} />
          <Route path="pages/2" component={PageTwo} />
        </Route>
      </Router>
  )
}

ReactDOM.render(
  <Root />,
  document.getElementById('root')
)
