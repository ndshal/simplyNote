import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SplashScreenContainer from './session/splash_screen_container';
import HomeContainer from './home/home_container';

const App = (props) => (
  <div>
    <AuthRoute path='/signin' component={SplashScreenContainer} />
    <AuthRoute path='/signup' component={SplashScreenContainer} />
    <Route exact path='/' render={() => <Redirect to='/home' />} />
    <ProtectedRoute exact path='/home' component={HomeContainer} />
  </div>
);

export default App;
