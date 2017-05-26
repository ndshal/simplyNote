import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { merge } from 'lodash';

class TagForm extends Component {
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
    const tag = merge({}, this.state);
    this.props.createTag(tag)
      .then(({ tag }) => (
        this.props.history.push(`/home/tag/${tag.id}/notes`)
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
        <button type='submit'>Create Tag</button>
      </div>
    );
  }

  newFormHeader() {
    return (
      <header className='object-form-header'>
        <i className="fa fa-tag"></i>
        <span className='object-form-header-text'>
          create tag
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
          placeholder='Name your tag'
          ref='name'/>

        {this.newFormButtons()}
      </form>
    );
  }
}

export default withRouter(TagForm);
