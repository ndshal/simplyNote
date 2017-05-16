import React from 'react';
import { Link, Route} from 'react-router-dom';
import SessionFormContainer from './session/session_form_container';

const App = (props) => (
  <div>
    <header>
      <h3> Welcome to SimplyNote </h3>
    </header>
    <Route path='/signin' component={SessionFormContainer} />
    <Route path='/signup' component={SessionFormContainer} />
  </div>
);

export default App;
