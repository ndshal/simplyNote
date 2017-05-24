import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class NotebookIndexItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDelete: false
    };

    this.toggleDeleteView = this.toggleDeleteView.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  toggleDeleteView(e) {
    e.preventDefault();
    this.setState({showDelete: !this.state.showDelete});
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteNotebook();
  }

  render () {
    const { linkPath, name, note_count } = this.props;
    let className='index-item';

    let deleteClass = 'hidden';
    if (this.state.showDelete) {
      deleteClass += ' delete-view';
    }

    return (
      <Link to={`${linkPath}/notes`}>
        <li className={className}>
          <div className='index-item-content'>
            <h3>{name}</h3>
            <h4>{note_count} notes</h4>
            <Link to={`${linkPath}/delete`}>
              <i className='fa fa-trash'></i>
            </Link>

            <button onClick={this.toggleDeleteView}>
              <i className='fa fa-trash'></i>
            </button>
            <p></p>
          </div>

          <div className={deleteClass}>
            <span>This notebook will be deleted. Are you sure?</span>
            <span className='delete-btns'>
              <i
                className='fa fa-times-circle'
                onClick={this.toggleDeleteView}></i>
              <i
                className='fa fa-check-circle'
                onClick={this.handleDelete}></i>
            </span>
          </div>
        </li>

    </Link>
    );
  }
}

export default withRouter(NotebookIndexItem);
