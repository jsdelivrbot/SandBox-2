import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import App from './components/App'
import IndexPage from './components/IndexPage'
import SectionOne from './components/SectionOne'
import SectionTwo from './components/SectionTwo'
import './index.css'

const Root = () => {
  return (
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={IndexPage} />
          <Route path="sections/1" component={SectionOne} />
          <Route path="sections/2" component={SectionTwo} />
        </Route>
      </Router>
  )
}

ReactDOM.render(
  <Root />,
  document.getElementById('root')
)
