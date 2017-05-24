import { connect } from 'react-redux';
import { sortItemSliceAlphabetically } from '../../reducers/selectors';
import { deleteTag } from '../../actions/tags_actions';
import TagsIndex from './tags_index';

const mapStateToProps = ({ tags }) => ({
  tags: sortItemSliceAlphabetically(tags)
});
const mapDispatchToProps = dispatch => ({
  deleteTag: id => dispatch(deleteTag(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TagsIndex);
