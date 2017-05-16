import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <section>
        <h2> Welcome, {this.props.currentUser.username}</h2>
        <button onClick={this.props.signout}>Sign Out</button>
      </section>
    );
  }
}

export default Home;
