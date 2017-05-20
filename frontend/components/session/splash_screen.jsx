import React, { Component } from 'react';
import SessionFormContainer from './session_form_container';
import { AuthRoute } from '../../util/route_util';
import { Route, withRouter } from 'react-router-dom';

const SplashScreen = () => (
  <section className='splash-screen'>
    <nav>
      <i className='fa fa-pencil-square-o'></i>
      <h1>SimplyNote</h1>
    </nav>
    <section className='splash-content'>

      <Route path='/splash/signin' component={SessionFormContainer} />
      <Route path='/splash/signup' component={SessionFormContainer} />
    </section>
  </section>
);

export default withRouter(SplashScreen);
