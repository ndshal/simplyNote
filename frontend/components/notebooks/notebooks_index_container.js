import { connect } from 'react-redux';
import { sortItemSliceByName } from '../../reducers/selectors';
import { fetchAllNotebooks, deleteNotebook } from '../../actions/notebooks_actions';
import NotebooksIndex from './notebooks_index';

const mapStateToProps = ({ notebooks }) => ({
  notebooks: sortItemSliceByName(notebooks)
});
const mapDispatchToProps = dispatch => ({
  deleteNotebook: id => dispatch(deleteNotebook(id)),
  fetchAllNotebooks: () => dispatch(fetchAllNotebooks())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotebooksIndex);
