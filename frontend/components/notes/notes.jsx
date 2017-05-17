import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NotesIndexContainer from './notes_index_container';
import NoteDetailContainer from './note_detail_container';

class Notes extends Component {
  componentDidMount() {
    this.props.fetchAllNotes();
  }

  render (){
    const { url, filter } = this.props;
    return (
      <section className='notes'>
        <NotesIndexContainer url={url} filter={filter}/>
        <Route path={`${url}/:noteId`} component={NoteDetailContainer} />
      </section>
    );
  }
}

export default Notes;
