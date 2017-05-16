import React from 'react';
import SessionForm from './session_form';

export default ({formType, loggedIn, errors, processForm, clearErrors}) => (
  <section className='splash-screen'>
    <nav>
      <img
        src='https://maxcdn.icons8.com/Share/icon/dotty/User_Interface//ios_application_placeholder1600.png'
        alt='placeholder-log' />
      <h1>SimplyNote</h1>
    </nav>
    <section className='session-form'>
      <iframe src="https://giphy.com/embed/mCRJDo24UvJMA" allowFullScreen></iframe>
      
      <SessionForm
        formType={formType}
        loggedIn={loggedIn}
        errors={errors}
        clearErrors={clearErrors}
        processForm={processForm} />
    </section>
  </section>
);
