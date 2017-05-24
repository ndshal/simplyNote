import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { merge } from 'lodash';

class DeleteObject extends Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleCancel(e) {
    e.preventDefault();
    this.props.history.goBack();
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteObject()
      .then(this.props.history.goBack());
  }


  render() {
    console.log(this.props.deleteObject);

    const { name } = this.props;
    return (
      <div className='object-form'>
        <header className='object-form-header'>
          <i className="fa fa-trash"></i>
          <span className='object-form-header-text'>
            {`delete ${this.props.object}`}
          </span>
        </header>

        <div>
          Are you sure you want to delete <span>{name}</span>?
        </div>

        <div className='object-form-btns'>
          <button
            className='cancel-btn'
            onClick={this.handleCancel}>Cancel</button>
          <button
            onClick={this.handleDelete}>Delete</button>
        </div>
      </div>
    );
  }
}

export default withRouter(DeleteObject);
