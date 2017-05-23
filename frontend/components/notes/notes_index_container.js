import { connect } from 'react-redux';
import { sortItemsByDate, selectNotesByFilter } from '../../reducers/selectors';
import { deleteNote } from '../../actions/notes_actions';
import NotesIndex from './notes_index';

const mapStateToProps = (state, { url, filter }) => {
  let heading;
  if (filter.object) {
    const objectName = state[`${filter.object}s`][filter.objectId].name;
    heading = `${filter.object}: ${objectName}`;
  } else {
    heading = 'notes';
  }

  return {
    notes: sortItemsByDate(selectNotesByFilter(state.notes, filter)),
    url,
    heading
  };
};

const mapDispatchToProps = dispatch => ({
  deleteNote: id => dispatch(deleteNote(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotesIndex);
