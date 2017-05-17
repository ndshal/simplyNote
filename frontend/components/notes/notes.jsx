import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NotesIndexContainer from './notes_index_container';
import NoteDetail from './note_detail';

class Notes extends Component {
  componentDidMount() {
    this.props.fetchAllNotes();
  }

  render (){
    const { url, filter } = this.props;
    return (
      <section className='notes'>
        <NotesIndexContainer filter={filter}/>
        <Route path={`${url}/:noteId`} component={NoteDetail} />
      </section>
    );
  }
}

export default Notes;
