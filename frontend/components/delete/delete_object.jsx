import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { merge } from 'lodash';

class DeleteObject extends Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  dependentsMessage() {
    let messageHead, messageTail;
    const noteCount = this.props.notes.length;
    let noteWord = noteCount === 1? 'note' : 'notes';
    let isWord = noteCount === 1? 'is' : 'are';

    if (this.props.object === 'notebook') {
      messageHead = 'This notebook contains ';
      messageTail = ` ${noteWord}.`;
    } else if (this.props.object === 'tag') {
      messageHead = `There ${isWord} `;
      messageTail = ` ${noteWord} with this tag.`;
    }

    return (
      <p className='dependents-message'>
        {messageHead}
        <span className='subject'>{this.props.notes.length}</span>
        {messageTail}
      </p>
    );
  }

  handleCancel(e) {
    e.preventDefault();
    this.props.history.goBack();
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteObject()
      .then(this.props.history.push(`/home/${this.props.object}s`));
  }


  render() {
    const { name, notes, object } = this.props;
    return (
      <div className='object-form'>
        <header className='object-form-header'>
          <i className="fa fa-trash"></i>
          <span className='object-form-header-text'>
            {`delete ${this.props.object}`}
          </span>
        </header>

        <div className='message'>
          Are you sure you want to delete <span className='subject'>{name}</span>?

          {this.dependentsMessage()}
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
