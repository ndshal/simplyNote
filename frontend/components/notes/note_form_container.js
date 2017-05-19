import { connect } from 'react-redux';
import {
  fetchSingleNote,
  updateNote,
  createNote
} from '../../actions/notes_actions';
import NoteForm from './note_form';

const mapStateToProps = state => ({
  note: state.noteDetail
});

const mapDispatchToProps = (dispatch, { match }) => ({
  pathId: match.params.noteId,
  fetchNote: () => dispatch(fetchSingleNote(match.params.noteId)),
  updateNote: note => dispatch(updateNote(note)),
  createNote: note => dispatch(createNote(note))
});

export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);
