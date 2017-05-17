import React from 'react';
import NoteIndexItem from './note_index_item';

const NotesIndex = ({ heading, notes }) => (
  <aside className='notes-index'>
    <header>{heading}</header>
    <ul>
      { notes.map(note => <NoteIndexItem key={note.id} {...note} />) }
    </ul>
  </aside>
);

export default NotesIndex;

// For search: set state = {notes: this.props.notes},
// filter state via search results, this will rerender IndexItems
// will need to refactor this into a class component
