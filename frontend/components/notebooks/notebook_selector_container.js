import { connect } from 'react-redux';
import { fetchAllNotebooks } from '../../actions/notebooks_actions';
import { sortItemSliceByName } from '../../reducers/selectors';
import NotebookSelector from './notebook_selector';

const mapStateToProps = ({ notebooks }) => ({
  notebooks: sortItemSliceByName(notebooks)
});

const mapDispatchToProps = dispatch => ({
  fetchAllNotebooks: () => dispatch(fetchAllNotebooks())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotebookSelector);
