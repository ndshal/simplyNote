import React from 'react';
import { Route } from 'react-router-dom';
import NotesIndexContainer from './notes_index_container';
import NoteDetail from './note_detail';

const Notes = ({ location, match }) => {
  return(
    <section className='notes'>
      <NotesIndexContainer filter={match.params}/>
      <Route path={`${match.url}/:noteId`} component={NoteDetail} />
    </section>
  );
};

export default Notes;
