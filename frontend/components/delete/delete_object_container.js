import { connect } from 'react-redux';
import { selectNoteTitlesByFilter, getObjectName } from '../../reducers/selectors';
import { deleteNotebook } from '../../actions/notebooks_actions';
import { deleteTag } from '../../actions/tags_actions';
import DeleteObject from './delete_object';

const mapStateToProps = (state, { match} ) => {
  const { object, objectId } = match.params;

  return {
    notes: selectNoteTitlesByFilter(state.notes, {object, objectId}),
    name : getObjectName(state, {object, objectId }),
    object,
  };
};

const mapDispatchToProps = (dispatch, { match }) => {
  const { object, objectId } = match.params;
  const deleteAction = (object === 'notebook'? deleteNotebook : deleteTag);

  return {
    deleteObject: () => dispatch(deleteAction(objectId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteObject);
