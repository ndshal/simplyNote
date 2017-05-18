import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default ({signout}) => (
  <nav className='side-nav'>
    <div className='top-links'>
      <Link to='/home/notes/new'>
        <i className="fa fa-plus-circle"></i>
      </Link>
    </div>

    <div className='center-links'>
      <Link to='/home/notes'>
        <i className="fa fa-file-text"></i>
      </Link>
      <Link to='/home/notebooks'>
        <i className="fa fa-book"></i>
      </Link>
      <Link to='/home/tags'>
        <i className="fa fa-tag"></i>
      </Link>
    </div>

    <div className='bottom-links'>
      <a onClick={signout} >
        <i className="fa fa-sign-out"></i>
      </a>
    </div>
  </nav>
);
