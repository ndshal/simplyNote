import { connect } from 'react-redux';
import { fetchAllTags } from '../../actions/tags_actions';
import TagSelector from './tag_selector';

const mapStateToProps = state => ({
  tags: state.tags
});

const mapDispatchToProps = dispatch => ({
  fetchAllTags: () => dispatch(fetchAllTags())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TagSelector);
