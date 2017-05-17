import { connect } from 'react-redux';
import NoteDetail from './note_detail';

const mapStateToProps = (state, { match }) => ({
  note: state.notes[match.params.noteId]
});

export default connect(mapStateToProps)(NoteDetail);
