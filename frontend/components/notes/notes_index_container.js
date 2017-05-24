import { connect } from 'react-redux';
import { sortItemsByDate, selectNotesByFilter, getHeadingFromFilter } from '../../reducers/selectors';
import { fetchAllNotes, deleteNote } from '../../actions/notes_actions';
import NotesIndex from './notes_index';

const mapStateToProps = (state, { url, filter }) => {
  return {
    notes: sortItemsByDate(selectNotesByFilter(state.notes, filter)),
    heading: getHeadingFromFilter(state, filter),
    url
  };
};

const mapDispatchToProps = dispatch => ({
  deleteNote: id => dispatch(deleteNote(id)),
  fetchAllNotes: () => dispatch(fetchAllNotes())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotesIndex);
