import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import App from './components/App'
import WelcomePage from './components/WelcomePage'
import SectionOne from './components/SectionOne'
import SectionTwo from './components/SectionTwo'
import './index.css'

const Root = () => {
  return (
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={WelcomePage} />
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
