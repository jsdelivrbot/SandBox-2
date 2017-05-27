import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import App from './components/App'
import WelcomePage from './components/WelcomePage'
import SectionOne from './components/Section1'
import SectionTwo from './components/Section2'
import SectionThree from './components/Section3'
import SectionFour from './components/Section4'
import SectionFive from './components/Section5'
import SectionSix from './components/Section6'
import './index.css'

const Root = () => {
  return (
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={WelcomePage} />
          <Route path="sections/1" component={SectionOne} />
          <Route path="sections/2" component={SectionTwo} />
          <Route path="sections/3" component={SectionThree} />
          <Route path="sections/4" component={SectionFour} />
          <Route path="sections/5" component={SectionFive} />
          <Route path="sections/6" component={SectionSix} />
        </Route>
      </Router>
  )
}

ReactDOM.render(
  <Root />,
  document.getElementById('root')
)
