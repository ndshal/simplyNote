import { connect } from 'react-redux';
import { values } from 'lodash';
import NotesIndex from './notes_index';

const mapStateToProps = (state, { filter }) => {
  let heading;
  if (filter.object) {
    const objectName = state[`${filter.object}s`][filter.objectId].name;
    heading = `${filter.object}: ${objectName}`;
  } else {
    heading = 'all notes';
  }

  return {
    notes: values(state.notes),
    heading
  };
};

export default connect(mapStateToProps)(NotesIndex);
