import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import { signin, signout } from './actions/session_actions';
window.signin = signin;
window.signout = signout;

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;
  if (window.currentUser) {
    const preloadedState = { currentUser: window.currentUser };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.store = store;
  ReactDOM.render(<h1>Hello There</h1>, root);
});
