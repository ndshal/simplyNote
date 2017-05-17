import { connect } from 'react-redux';
import NotesIndex from './notes_index';
import { selectNotesByFilter } from '../../reducers/selectors';

const mapStateToProps = (state, { filter }) => {
  let heading;
  if (filter.object) {
    const objectName = state[`${filter.object}s`][filter.objectId].name;
    heading = `${filter.object}: ${objectName}`;
  } else {
    heading = 'all notes';
  }

  return {
    notes: selectNotesByFilter(state, filter),
    heading
  };
};

export default connect(mapStateToProps)(NotesIndex);
