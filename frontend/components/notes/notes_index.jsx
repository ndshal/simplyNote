import React from 'react';
import NoteIndexItem from './note_index_item';

const NotesIndex = ({ heading, notes, url }) => (
  <aside className='notes-index'>
    <header>{heading}</header>
    <ul>
      { notes.map(
        note => <NoteIndexItem
        key={note.id}
        linkPath={`${url}/${note.id}`}
        {...note} />) }
    </ul>
  </aside>
);

export default NotesIndex;

// For search: set state = {notes: this.props.notes},
// filter state via search results, this will rerender IndexItems
// will need to refactor this into a class component
