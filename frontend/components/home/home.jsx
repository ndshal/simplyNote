import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Nav from './nav';
import NotesContainer from '../notes/notes_container';
import NotebooksIndexContainer from '../notebooks/notebooks_index_container';

class Home extends Component {
  render() {
    return (
      <secion className='home-content'>
        <Nav signout={this.props.signout}/>
        <Route path='/home/notes' component={NotesContainer} />
        <Route path='/home/:object/:objectId/notes' component={NotesContainer} />
        <Route path='/home/notebooks' component={NotebooksIndexContainer} />

        <footer>
          <h2> Welcome, {this.props.currentUser.username}</h2>
          <button onClick={this.props.signout}>Sign Out</button>
        </footer>
      </secion>
    );
  }
}

export default Home;
