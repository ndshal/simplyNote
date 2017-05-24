import { connect } from 'react-redux';
import {
  fetchSingleNote,
  updateNote,
  createNote
} from '../../actions/notes_actions';
import { clearErrors } from '../../actions/errors_actions';
import NoteDetail from './note_detail';
import { sortItemSliceByTitle } from '../../reducers/selectors';


const mapStateToProps = state => ({
  note: state.noteDetail
});

const mapDispatchToProps = (dispatch, { match }) => ({
  formType: match.params.noteId === 'new' ? 'new' : 'edit',
  pathId: match.params.noteId,
  fetchNote: () => dispatch(fetchSingleNote(match.params.noteId)),
  updateNote: note => dispatch(updateNote(note)),
  createNote: note => dispatch(createNote(note)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(NoteDetail);
