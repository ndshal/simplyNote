import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import NoteIndexItem from './note_index_item';

class NotesIndex extends Component {
  componentDidMount() {
    const currentPath = this.props.location.pathname;
    if(currentPath.endsWith('notes')) {
      this.props.history.push(
        `${currentPath}/${this.props.notes[0].id}`
      );
    }
  }

  render () {
    const { heading, notes, url } = this.props;
    return(
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
  }
}

export default withRouter(NotesIndex);

// For search: set state = {notes: this.props.notes},
// filter state via search results, this will rerender IndexItems
// will need to refactor this into a class component
