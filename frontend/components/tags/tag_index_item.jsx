import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TagIndexItem extends Component {
  handleDelete(e) {
    e.preventDefault();
    this.props.deleteTag();
  }

  render () {
    const { linkPath, name, note_count } = this.props;

    return (
      <li className='tag-index-item'>
        <Link to={linkPath}>
          <i className='fa fa-trash'></i>
          <span>{name}</span>
          <span className='tag-note-count'>{note_count}</span>
        </Link>
      </li>
    );
  }
}

export default TagIndexItem;
