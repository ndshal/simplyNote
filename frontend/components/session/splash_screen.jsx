import React from 'react';
import SessionFormContainer from './session_form_container';
import { AuthRoute } from '../../util/route_util';

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

      <AuthRoute path='/signin' component={SessionFormContainer} />
      <AuthRoute path='/signup' component={SessionFormContainer} />
    </section>
  </section>
);
