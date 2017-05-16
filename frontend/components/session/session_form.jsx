import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { merge } from 'lodash';

class SessionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  componentWillReceiveProps(prevState, nextState) {
    if (nextState.loggedIn) {
      history.location.push('/');
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = merge({}, this.state);
    this.props.processForm(user);
  }

  update(field) {
    return (e) => (
      this.setState({ [field]: e.target.value })
    );
  }

  renderErrors() {
    return (
      <ul>
        {
          this.props.errors.map(
            (err, i) => <li key={i}>{err}</li>
        )
      }
    </ul>
    );
  }

  renderButtons() {
    if (this.props.formType === 'signin') {
      return (
        <div>
          <button type='submit'>Sign In</button>
          <button>Demo</button>
          <Link to='/signup'>or Sign Up</Link>;
        </div>
      );
    } else {
      return (
        <div>
          <button type='submit'>Sign Up</button>
          <Link to='/signin'>or Sign In</Link>;
        </div>
      );
    }
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit} >
        {this.renderErrors()}

        <input
          placeholder="Username"
          value={this.state.username}
          onChange={this.update('username')} />
        <input
          placeholder="Password"
          type='password'
          value={this.state.password}
          onChange={this.update('password')} />

        {this.renderButtons()}
      </form>
    );
  }
}

export default withRouter(SessionForm);
