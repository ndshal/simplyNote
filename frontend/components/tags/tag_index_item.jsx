import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class TagIndexItem extends Component {
  constructor(props) {
    super(props);
    this.showDeletePage = this.showDeletePage.bind(this);
  }

  showDeletePage(e) {
    e.preventDefault();
    this.props.history.push(`${this.props.linkPath}/delete`);
  }

  render () {
    const { linkPath, name, note_count } = this.props;

    return (
      <li className='tag-index-item'>
        <Link to={`${linkPath}/notes`}>
          <span>{name}</span>
          <span className='tag-note-count'>{note_count}</span>
        </Link>
        <i
          className='fa fa-trash'
          onClick={this.showDeletePage}></i>
      </li>
    );
  }
}

export default withRouter(TagIndexItem);
