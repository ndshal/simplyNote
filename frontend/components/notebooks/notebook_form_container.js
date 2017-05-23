import { connect } from 'react-redux';
import { createNotebook } from '../../actions/notebooks_actions';
import NotebookForm from './notebook_form';

const mapDispatchToProps = dispatch => ({
  createNotebook: notebook => dispatch(createNotebook(notebook))
});

export default connect(
  null,
  mapDispatchToProps
)(NotebookForm);
