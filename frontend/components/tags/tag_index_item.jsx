import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TagIndexItem extends Component {
  handleDelete(e) {
    e.preventDefault();
    this.props.deleteTag();
  }

  render () {
    const { linkPath, name } = this.props;

    return (
      <li className='tag-index-item'>
        <Link to={linkPath}>
          {name}
        </Link>
      </li>
    );
  }
}

export default TagIndexItem;
