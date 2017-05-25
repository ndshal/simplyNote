import { connect } from 'react-redux';
import { clearErrors } from '../../actions/errors_actions';
import { createNotebook } from '../../actions/notebooks_actions';
import NotebookForm from './notebook_form';

const mapStateToProps = state => ({
  errors: state.errors.createForm
});

const mapDispatchToProps = dispatch => ({
  createNotebook: notebook => dispatch(createNotebook(notebook)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotebookForm);
