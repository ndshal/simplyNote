import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SessionFormContainer from './session/session_form_container';
import HomeContainer from './home/home_container';

const App = (props) => (
  <div>
    <AuthRoute path='/signin' component={SessionFormContainer} />
    <AuthRoute path='/signup' component={SessionFormContainer} />
    <Route exact path='/' render={() => <Redirect to='/home' />} />
    <ProtectedRoute exact path='/home' component={HomeContainer} />
  </div>
);

export default App;
