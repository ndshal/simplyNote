import { RECEIVE_SINGLE_NOTE, REMOVE_NOTE } from '../actions/notes_actions';
import { merge } from 'lodash';

const _emptyNote = {
  id: -1,
  title: '',
  body: '',
  notebook_id: -1,
  tag_names: []
};

const noteDetailReducer = (state = _emptyNote, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SINGLE_NOTE:
      return action.note;
    default:
      return state;
  }
};

export default noteDetailReducer;
