import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

const linkLabel = (text) => (
  <label className='link-label'>
    <i className="fa fa-caret-left"></i>
    <span>{text}</span>
  </label>
);

const Nav = ({signout, location}) => {
  const path = location.pathname;
  let indexPath = '/home/notes';
  let regmatch = path.match(/\/home\/(notebook|tag)\/\d/);

  if(regmatch){
    indexPath = `${regmatch[0]}/notes`;
  }

  return (
    <nav className='side-nav'>
      <div className='logo'>
        <i className="fa fa-pencil-square-o"></i>
      </div>

      <div className='top-links'>
        <Link to={`${indexPath}/new`}>
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


      <div className='bottom-links'>
        <div className='bottom-border'></div>
        <a onClick={signout} >
          <i className="fa fa-sign-out"></i>
          {linkLabel('logout')}
        </a>
      </div>
    </nav>
  );
};

export default withRouter(Nav);
