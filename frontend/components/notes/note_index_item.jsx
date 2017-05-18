import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class NoteIndexItem extends Component {
  isActive() {
    let selected = '';
    const re = /notes\/(\d*)$/;
    const path = this.props.location.pathname;

    if (path.match(re) && parseInt(path.match(re)[1]) === this.props.id) {
      selected = 'current-note';  
    }

    return `index-item ${selected}`;
  }

  render () {
    return (
      <li className={this.isActive()}>
        <Link to={this.props.linkPath}>
          <header>
            <h3>{this.props.title}</h3>
            <h4>{this.props.updated_at} ago</h4>
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

export default withRouter(NoteIndexItem);
