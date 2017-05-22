import { connect } from 'react-redux';
import { sortItemsByDate } from '../../reducers/selectors';
import { deleteNotebook, fetchAllNotebooks } from '../../actions/notebooks_actions';
import NotebooksIndex from './notebooks_index';

const mapStateToProps = ({ notebooks }) => ({
  notebooks: sortItemsByDate(notebooks)
});
const mapDispatchToProps = dispatch => ({
  fetchAllNotebooks: () => dispatch(fetchAllNotebooks()),
  deleteNotebook: id => dispatch(deleteNotebook(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotebooksIndex);
