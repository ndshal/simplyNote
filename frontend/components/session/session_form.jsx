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
      username: 'notetaker23',
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

  renderErrors(type) {
    return (
      <ul className='session-errors'>
        {
          this.props.errors.map(
            (err, i) => {
              if(err.startsWith(type)) {
                return <li key={i}>
                  <i className="fa fa-caret-left"></i>
                  <span>{err}</span>
                </li>;
              }
            }
        )
      }
    </ul>
    );
  }

  navLink() {
    if (this.props.formType === 'signin') {
      return <Link to='/splash/signup'>Sign Up</Link>;
    } else {
      return <Link to='/splash/signin'>Sign In</Link>;
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

        <div className='session-inputs'>
          <label className='input-w-error'>
            <input
              placeholder="Username"
              value={this.state.username}
              onChange={this.update('username')} />
          {this.renderErrors('Username')}
        </label>

          <label className='input-w-error'>
            <input
              placeholder="Password"
              type='password'
              value={this.state.password}
              onChange={this.update('password')} />
            {this.renderErrors('Password')}
          </label>
        </div>

        {this.renderButtons()}

        <div className='or-divider'>
          <span className='line'></span>
          <span className='text'>or</span>
          <span className='line'></span>
        </div>

        {this.navLink()}
      </form>
    );
  }
}

export default withRouter(SessionForm);
