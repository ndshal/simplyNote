import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { merge } from 'lodash';

class NotebookForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.update = this.update.bind(this);
  }

  handleCancel(e) {
    e.preventDefault();
    this.props.history.goBack();
  }

  handleSubmit(e) {
    e.preventDefault();
    const notebook = merge({}, this.state);
    this.props.createNotebook(notebook)
      .then(({ notebook }) => (
        this.props.history.push(`/home/notebook/${notebook.id}/notes`)
      ));
  }

  update(field) {
    return e => this.setState({[field]: e.target.value});
  }

  newFormButtons() {
    return (
      <div className='notebook-form-btns'>
        <button
          className='cancel-btn'
          onClick={this.handleCancel}>Cancel</button>
        <button type='submit'>Create Notebook</button>
      </div>
    );
  }

  newFormHeader() {
    return (
      <header className='notebook-form-header'>
        <i className="fa fa-book"></i>
        <span className='notebook-form-header-text'>
          create notebook
        </span>
      </header>
    );
  }

  render() {
    const { title } = this.state;
    return (
      <form
        onSubmit={this.handleSubmit}>

        {this.newFormHeader()}

        <input
          value={title}
          onChange={this.update('title')}
          placeholder='Title your notebook' />

        {this.newFormButtons()}
      </form>
    );
  }
}

export default withRouter(NotebookForm);
