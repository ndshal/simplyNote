import React from 'react';
import SessionForm from './session_form';

export default ({formType, loggedIn, errors, processForm}) => (
  <section className='splash-screen'>
    <nav>
      <h2> Its a header </h2>
    </nav>
    <SessionForm
      formType={formType}
      loggedIn={loggedIn}
      errors={errors}
      processForm={processForm} />
  </section>
);
