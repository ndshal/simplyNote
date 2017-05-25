import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import NoteIndexItem from './note_index_item';
import { merge } from 'lodash';
import { filterNotesBySearchTerm } from '../../reducers/selectors';


class NotesIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {notes: [], searchTerm: ''};
    // this.state = {searchTerm: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllNotes();
  }

  componentWillReceiveProps(newProps) {
    if(this.state.notes.length !== newProps.notes.length) {
      const filteredNotes = filterNotesBySearchTerm(newProps.notes, this.state.searchTerm);
      this.setState({notes: filteredNotes});
    }

    const currentPath = newProps.location.pathname;
    if(currentPath.endsWith('notes')) {
      if(newProps.notes[0]) {
        newProps.history.push(`${currentPath}/${newProps.notes[0].id}`);
      } else {
        newProps.history.push(`${currentPath}/new`);
      }
    }
  }

  componentWillUpdate(newProps, { searchTerm }) {
    if(searchTerm !== this.state.searchTerm) {
      const filteredNotes = filterNotesBySearchTerm(newProps.notes, searchTerm);
      this.setState({notes: filteredNotes});
    }
  }

  handleChange(e) {
    this.setState({searchTerm: e.target.value.toLowerCase()});
  }

  render () {
    const { heading, url } = this.props;
    const { notes, searchTerm } = this.state;

    const noteWord = notes.length === 1 ? 'note' : 'notes';
    const noteCount = `${notes.length} ${noteWord}`;

    return(
      <aside className='notes-index'>
        <header>
          <div className='header-title'>{heading}</div>
          <div className='item-count'>{noteCount}</div>
          <form>
            <input
              className='search-bar'
              value={searchTerm}
              onChange={this.handleChange}
              placeholder='Search by note title'/>
          </form>
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
