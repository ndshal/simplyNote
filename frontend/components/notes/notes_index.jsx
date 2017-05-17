import React from 'react';
import NoteIndexItem from './note_index_item';

const NotesIndex = ({ heading, notes }) => (
  <aside className='notes-index'>
    <header> {heading}</header>
    <ul>
      { notes.map(note => <NoteIndexItem key={note.id} {...note} />) }
    </ul>
  </aside>
);

export default NotesIndex;
