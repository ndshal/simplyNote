import { connect } from 'react-redux';
import { fetchSingleNote } from '../../actions/notes_actions';
import NoteDetail from './note_detail';

const mapStateToProps = state => ({
  note: state.noteDetail
});

const mapDispatchToProps = (dispatch, { match }) => ({
  pathId: match.params.noteId,
  fetchNote: () => dispatch(fetchSingleNote(match.params.noteId))
});

export default connect(mapStateToProps, mapDispatchToProps)(NoteDetail);
