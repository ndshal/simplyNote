import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <h2> Welcome, {this.props.currentUser.username}</h2>
    );
  }
}

export default Home;
