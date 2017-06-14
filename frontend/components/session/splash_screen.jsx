import React, { Component } from 'react';
import SessionFormContainer from './session_form_container';
import { AuthRoute } from '../../util/route_util';
import { Route, withRouter } from 'react-router-dom';

const SplashScreen = () => (
  <section className='splash-screen'>
    <header>
      <i className='fa fa-pencil-square-o'></i>
      <h1>SimplyNote</h1>
    </header>
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
    <footer>
      <ul className='footer-links'>
        <li>
          <a href='https://github.com/ndshal/simplyNote'>
            <i className='fa fa-github'></i>
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/ndshal">
            <i className='fa fa-linkedin'></i>
          </a>
        </li>
        <li>
          <a href='mailto:ndshalimov@gmail.com'>
            <i className='fa fa-envelope'></i>
          </a>
        </li>
      </ul>
      <div className='info'>
        <span> SimplyNote is a note taking app inspired by Evernote. </span>
        <span> Copyright 2017 Nikita Shalimov </span>
      </div>
    </footer>
  </section>
);

export default withRouter(SplashScreen);
