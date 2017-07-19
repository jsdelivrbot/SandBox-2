import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from './components/App';
// import WelcomePage from './components/WelcomePage';
import AboutMe from './components/IndexTabs/AboutMe';
import Projects from './components/IndexTabs/Projects';
import CSS3 from './components/IndexTabs/CSS';
import Skills from './components/IndexTabs/Skills';
import Resume from './components/IndexTabs/Resume';
import Contact from './components/IndexTabs/Contact';
import './index.css';

const Root = () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={AboutMe} />
        <Route path="about" component={AboutMe} />
        <Route path="projects" component={Projects} />
        <Route path="css3" component={CSS3} />
        <Route path="skills" component={Skills} />
        <Route path="resume" component={Resume} />
        <Route path="contact" component={Contact} />
      </Route>
    </Router>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
