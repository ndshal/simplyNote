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
      <h2 className='description-heading'>
        Smarter, Simpler, Notes
      </h2>
      <h3 className='description-message'>
        SimplyNote lets you style, organize, and access your notes from anywhere.
      </h3>

      <Route path='/splash/signin' component={SessionFormContainer} />
      <Route path='/splash/signup' component={SessionFormContainer} />
    </section>
  </section>
);

export default withRouter(SplashScreen);
