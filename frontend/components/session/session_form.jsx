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
    this.handleDemo = this.handleDemo.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  componentWillReceiveProps(prevState, nextState) {
    if (nextState.loggedIn) {
      history.location.push('/home');
    }
  }

  handleDemo(e) {
    e.persist();
    this.setState({
      username: 'john@example.com',
      password: 'password'
    }, () => this.handleSubmit(e));
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
      <ul className='session-errors'>
        {
          this.props.errors.map(
            (err, i) => <li key={i}>{err}</li>
        )
      }
    </ul>
    );
  }

  navLink() {
    if (this.props.formType === 'signin') {
      return <Link to='/signup'>or Sign Up</Link>;
    } else {
      return <Link to='/signin'>or Sign In</Link>;
    }
  }

  renderButtons() {
    if (this.props.formType === 'signin') {
      return (
        <div className='session-btns'>
          <button type='submit'>Sign In</button>
          <button onClick={this.handleDemo}>Demo</button>
        </div>
      );
    } else {
      return (
        <div className='session-btns'>
          <button type='submit'>Sign Up</button>
        </div>
      );
    }
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className='session-form'>

        <span className='description-message'>Its for notes</span>

        <input
          placeholder="Username"
          value={this.state.username}
          onChange={this.update('username')} />
        <input
          placeholder="Password"
          type='password'
          value={this.state.password}
          onChange={this.update('password')} />

        {this.renderErrors()}
        {this.renderButtons()}
        {this.navLink()}
      </form>
    );
  }
}

export default withRouter(SessionForm);
