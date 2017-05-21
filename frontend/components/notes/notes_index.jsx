import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import NoteIndexItem from './note_index_item';

class NotesIndex extends Component {
  componentWillReceiveProps(newProps) {
    const currentPath = newProps.location.pathname;
    if(currentPath.endsWith('notes')) {
      if(newProps.notes[0]) {
        newProps.history.push(`${currentPath}/${newProps.notes[0].id}`);
      } else {
        newProps.history.push(`${currentPath}/new`);
      }
    }
  }

  render () {
    const { heading, notes, url } = this.props;
    return(
      <aside className='notes-index'>
        <header>
          <div className='header-title'>{heading}</div>
          <div className='note-count'>{notes.length} Notes</div>
        </header>
        <ul className='notes-list'>
          { notes.map(
            note => <NoteIndexItem
            key={note.id}
            linkPath={`${url}/${note.id}`}
            deleteNote={()=>this.props.deleteNote(note.id)}
            {...note} />) }
        </ul>
      </aside>
    );
  }
}

export default withRouter(NotesIndex);

// For search: set state = {notes: this.props.notes},
// filter state via search results, this will rerender IndexItems
