import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SplashScreen from './session/splash_screen';
import HomeContainer from './home/home_container';

const App = (props) => (
  <div>
    <AuthRoute path='/' component={SplashScreen} />
    <Route exact path ='/' render={()=><Redirect to='/signin' />} />
    <ProtectedRoute path='/home' component={HomeContainer} />
  </div>
);

export default App;
