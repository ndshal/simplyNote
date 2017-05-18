import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NoteIndexItem extends Component {
  render () {
    return (
      <li>
        <Link to={this.props.linkPath}>
          <header>
            <h3>{this.props.title}</h3>
            <h4>{this.props.updated_at}</h4>
            <button onClick={this.props.deleteNote}>
              <i className='fa fa-trash'></i>
            </button>
          </header>
          <p>{this.props.body_preview}</p>
        </Link>
      </li>
    );
  }
}

export default NoteIndexItem;
