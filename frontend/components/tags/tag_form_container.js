import { connect } from 'react-redux';
import { clearErrors } from '../../actions/errors_actions';
import { createTag } from '../../actions/tags_actions';
import TagForm from './tag_form';

const mapStateToProps = state => ({
  errors: state.errors.createForm
});

const mapDispatchToProps = dispatch => ({
  createTag: tag => dispatch(createTag(tag)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TagForm);
