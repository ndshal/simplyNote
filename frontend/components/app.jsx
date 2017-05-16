import React from 'react';
import { Link, Route} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SessionFormContainer from './session/session_form_container';
import HomeContainer from './home/home_container';

const App = (props) => (
  <div>
    <AuthRoute path='/signin' component={SessionFormContainer} />
    <AuthRoute path='/signup' component={SessionFormContainer} />
    <ProtectedRoute path='/' component={HomeContainer} />
  </div>
);

export default App;
