import { connect } from 'react-redux';
import { createTag} from '../../actions/tags_actions';
import TagForm from './tag_form';

const mapDispatchToProps = dispatch => ({
  createTag: tag => dispatch(createTag(tag))
});

export default connect(
  null,
  mapDispatchToProps
)(TagForm);
