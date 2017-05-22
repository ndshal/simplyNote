import { connect } from 'react-redux';
import { sortItemSliceByDate } from '../../reducers/selectors';
import { deleteNotebook } from '../../actions/notebooks_actions';
import NotebooksIndex from './notebooks_index';

const mapStateToProps = ({ notebooks }) => ({
  notebooks: sortItemSliceByDate(notebooks)
});
const mapDispatchToProps = dispatch => ({
  deleteNotebook: id => dispatch(deleteNotebook(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotebooksIndex);
