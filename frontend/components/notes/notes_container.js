import { connect } from 'react-redux';
import Notes from './notes';
import { fetchAllNotes } from '../../actions/notes_actions';

const mapStateToProps = (state, { match })=>({
  filter: match.params,
  url: match.url
});

const mapDispatchToProps = (dispatch, { match }) => ({
  fetchAllNotes: () => dispatch(fetchAllNotes(match.params))
});

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
