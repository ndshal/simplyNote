import { connect } from 'react-redux';
import { fetchSingleNote, updateNote } from '../../actions/notes_actions';
import NoteDetail from './note_detail';

const mapStateToProps = state => ({
  note: state.noteDetail
});

const mapDispatchToProps = (dispatch, { match }) => ({
  pathId: match.params.noteId,
  fetchNote: () => dispatch(fetchSingleNote(match.params.noteId)),
  updateNote: note => dispatch(updateNote(note))
});

export default connect(mapStateToProps, mapDispatchToProps)(NoteDetail);
