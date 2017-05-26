import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { merge } from 'lodash';

class NotebookForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.update = this.update.bind(this);
  }

  componentDidMount() {
    this.refs.name.focus();
  }

  componentWillUnmount() {
    this.props.clearErrors();
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
      <div className='object-form-btns'>
        <button
          className='cancel-btn'
          onClick={this.handleCancel}>Cancel</button>
        <button type='submit'>Create Notebook</button>
      </div>
    );
  }

  newFormHeader() {
    return (
      <header className='object-form-header'>
        <i className="fa fa-book"></i>
        <span className='object-form-header-text'>
          create notebook
        </span>
      </header>
    );
  }

  renderErrors() {
    const { errors } = this.props;
    const errClass = errors.length === 0 ? 'hidden' : 'create-errors';
    return (
      <div className={errClass}>{errors.join(', ')}</div>
    );
  }

  render() {
    const { name } = this.state;
    return (
      <form
        className='object-form'
        onSubmit={this.handleSubmit}>

        {this.renderErrors()}
        {this.newFormHeader()}

        <input
          value={name}
          onChange={this.update('name')}
          placeholder='Title your notebook'
          ref='name' />

        {this.newFormButtons()}
      </form>
    );
  }
}

export default withRouter(NotebookForm);
