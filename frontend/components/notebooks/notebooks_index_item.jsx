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

  toggleDeleteView() {
    this.setState({showDelete: !this.state.showDelete});
  }

  handleDelete() {
    this.props.deleteNote();
  }

  render () {
    const { linkPath, title, updated_str } = this.props;
    let className='index-item';

    let deleteClass = 'hidden';
    if (this.state.showDelete) {
      deleteClass += ' delete-view';
    }

    return (
      <Link to={linkPath}>
        <li className={className}>
          <div className='index-item-content'>
            <h3>{title}</h3>
            <h4>{updated_str} ago</h4>
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
