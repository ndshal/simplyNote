import React from 'react';
import SessionFormContainer from './session_form_container';
import { AuthRoute } from '../../util/route_util';
import { Route } from 'react-router-dom';

export default () => (
  <section className='splash-screen'>
    <nav>
      <img
        src='https://maxcdn.icons8.com/Share/icon/dotty/User_Interface//ios_application_placeholder1600.png'
        alt='placeholder-log' />
      <h1>SimplyNote</h1>
    </nav>
    <section className='splash-content'>
      <iframe src="https://giphy.com/embed/mCRJDo24UvJMA" allowFullScreen></iframe>

      <Route path='/signin' component={SessionFormContainer} />
      <Route path='/signup' component={SessionFormContainer} />
    </section>
  </section>
);
