import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <nav className='side-nav'>
    <Link to='/home/notes/new'>
      <i className="fa fa-plus-circle"></i>
    </Link>
    <Link to='/home/notes'>
      <i className="fa fa-file-text"></i>
    </Link>
    <Link to='/home/notebooks'>
      <i className="fa fa-book"></i>
    </Link>
    <Link to='/home/tags'>
      <i className="fa fa-tag"></i>
    </Link>
  </nav>
);
