import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class NotebookIndexItem extends Component {
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
      <Link to={`${linkPath}/notes`}>
        <li className={'index-item'}>
          <div className='index-item-content'>
            <h3>{name}</h3>
            <h4>{note_count} notes</h4>
            <button onClick={this.showDeletePage}>
              <i className='fa fa-trash'></i>
            </button>
          </div>
        </li>

    </Link>
    );
  }
}

export default withRouter(NotebookIndexItem);
