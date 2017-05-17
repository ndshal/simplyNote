import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import * as NoteActions from './actions/notes_actions';
window.NoteActions = NoteActions;

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
  ReactDOM.render(<Root store={store} />, root);
});
