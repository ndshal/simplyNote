import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const linkLabel = (text) => (
  <label className='link-label'>
    <i className="fa fa-caret-left"></i>
    <span>{text}</span>
  </label>
);

export default ({signout}) => (
  <nav className='side-nav'>
    <div className='logo'>
      <i className="fa fa-pencil-square-o"></i>
    </div>

    <div className='top-links'>
      <Link to='/home/notes/new'>
        <i className="fa fa-plus"></i>
        {linkLabel('new note')}
      </Link>
    </div>

    <div className='center-links'>
      <Link to='/home/notes'>
        <i className="fa fa-file-text"></i>
        {linkLabel('all notes')}
      </Link>
      <Link to='/home/notebooks'>
        <i className="fa fa-book"></i>
        {linkLabel('notebooks')}
      </Link>
      <Link to='/home/tags'>
        <i className="fa fa-tag"></i>
        {linkLabel('tags')}
      </Link>
    </div>

    <div className='bottom-border'></div>

    <div className='bottom-links'>
      <a onClick={signout} >
        <i className="fa fa-sign-out"></i>
        {linkLabel('logout')}
      </a>
    </div>
  </nav>
);
