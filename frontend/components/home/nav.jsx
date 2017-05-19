import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default ({signout}) => (
  <nav className='side-nav'>
    <div className='logo'>
      <i className="fa fa-pencil-square-o"></i>
    </div>

    <div className='top-links'>
      <Link to='/home/notes/new'>
        <i className="fa fa-plus"></i>
        <label className='link-label'>
          <i className="fa fa-caret-left"></i>
          <span>new note</span>
        </label>
      </Link>
    </div>

    <div className='center-links'>
      <Link to='/home/notes'>
        <i className="fa fa-file-text"></i>
        <label className='link-label'>
          <i className="fa fa-caret-left"></i>
          <span>all notes</span>
        </label>
      </Link>
      <Link to='/home/notebooks'>
        <i className="fa fa-book"></i>
        <label className='link-label'>
          <i className="fa fa-caret-left"></i>
          <span>notebooks</span>
        </label>
      </Link>
      <Link to='/home/tags'>
        <i className="fa fa-tag"></i>
        <label className='link-label'>
          <i className="fa fa-caret-left"></i>
          <span>tags</span>
        </label>
      </Link>
    </div>

    <div className='bottom-border'></div>

    <div className='bottom-links'>
      <a onClick={signout} >
        <i className="fa fa-sign-out"></i>
        <label className='link-label'>
          <i className="fa fa-caret-left"></i>
          <span>logout</span>
        </label>
      </a>
    </div>
  </nav>
);
