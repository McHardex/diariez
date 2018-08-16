import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { reducers } from './reducers/reducers'
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import LandingPage from './components/LandingPageComponents/LandingPage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import PasswordReset from './components/PasswordReset';


const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk)
  )
)





ReactDOM.render((
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={LandingPage} />
        <Route path="login" component={LoginPage} />
        <Route path="signup" component={SignupPage} />
        <Route path="pw-forget" component={PasswordReset} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('root'));
registerServiceWorker();