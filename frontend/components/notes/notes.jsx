import React from 'react';
import { Route } from 'react-router-dom';
import NotesIndex from './notes_index';
import NoteDetail from './note_detail';

const Notes = ({ location, match }) => {
  return(
    <section className='notes'>
      <NotesIndex />
      <Route path={`${match.url}/:noteId`} component={NoteDetail} />
    </section>
  );
};

export default Notes;
