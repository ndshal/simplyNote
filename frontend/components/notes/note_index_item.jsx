import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NoteIndexItem extends Component {
  render () {
    return (
      <li>
        <Link to={this.props.linkPath}>
          <header>{this.props.title}</header>
          <p>{this.props.body_preview}</p>
        </Link>
      </li>
    );
  }
}

export default NoteIndexItem;
