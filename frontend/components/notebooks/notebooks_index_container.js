import { connect } from 'react-redux';
import { deleteNotebook, fetchAllNotebooks } from '../../actions/notebooks_actions';
import NotebooksIndex from './notebooks_index';

const mapStateToProps = ({ notebooks }) => ({notebooks});
const mapDispatchToProps = dispatch => ({
  fetchAllNotebooks: () => dispatch(fetchAllNotebooks()),
  deleteNotebook: id => dispatch(deleteNotebook(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotebooksIndex);
