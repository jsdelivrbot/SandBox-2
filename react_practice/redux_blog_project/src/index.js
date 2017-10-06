import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

const Hello = () => {
  return <div>Hello</div>;
};

const Goodbye = () => {
  return <div>Goodbye</div>;
};

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Route path="/" component={App} />
        <Route path="/hello" component={Hello} />
        <Route path="/goodbye" component={Goodbye} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.querySelector('.container')
);
