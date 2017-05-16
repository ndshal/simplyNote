import React from 'react';
import SessionForm from './session_form';

export default ({formType, loggedIn, errors, processForm}) => (
  <section className='splash-screen'>
    <nav>
      <img
        src='https://maxcdn.icons8.com/Share/icon/dotty/User_Interface//ios_application_placeholder1600.png'
        alt='placeholder-log' />
      <h1>SimplyNote</h1>
    </nav>
    <SessionForm
      formType={formType}
      loggedIn={loggedIn}
      errors={errors}
      processForm={processForm} />
  </section>
);
