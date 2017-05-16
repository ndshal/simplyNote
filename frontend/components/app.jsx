import React from 'react';
import { Route } from 'react-router-dom';
import SessionFormContainer from './session/session_form_container';

const App = (props) => (
  <div>
    <header>
      <h3> Welcome to SimplyNote </h3>
    </header>

    <Route path='/signin' container={SessionFormContainer} />
    <Route path='/signup' container={SessionFormContainer} />
  </div>
);

export default App;
