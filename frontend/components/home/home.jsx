import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Nav from './nav';
import Notes from '../notes/notes';
import NotebooksIndexContainer from '../notebooks/notebooks_index_container';
import NotebookFormContainer from '../notebooks/notebook_form_container';
import TagsIndexContainer from '../tags/tags_index_container';
import TagFormContainer from '../tags/tag_form_container';


class Home extends Component {
  render() {
    return (
      <secion className='home-content'>
        <Nav signout={this.props.signout}/>
        <Route path='/home/notes' component={Notes} />
        <Route path='/home/:object/:objectId/notes' component={Notes} />
        <Route exact path='/home/notebooks' component={NotebooksIndexContainer} />
        <Route exact path='/home/notebooks/new' component={NotebookFormContainer} />

        <Route exact path='/home/tags' component={TagsIndexContainer} />
        <Route exact path='/home/tags/new' component={TagFormContainer} />
      </secion>
    );
  }
}

export default Home;
