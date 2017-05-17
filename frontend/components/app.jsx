import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SplashScreen from './session/splash_screen';
import HomeContainer from './home/home_container';

class App extends Component {
  componentDidMount() {
    this.props.history.push('/splash/signin');
  }

  render() {
    return (
      <div>
        <AuthRoute path='/splash' component={SplashScreen} />
        <ProtectedRoute path='/home' component={HomeContainer} />
      </div>
    );
  }
}

export default withRouter(App);
