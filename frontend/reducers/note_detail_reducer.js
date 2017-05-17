import { RECIEVE_SINGLE_NOTE } from '../actions/notes_actions';
import { merge } from 'lodash';

const noteDetailReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECIEVE_SINGLE_NOTE:
      return merge({}, state, {[action.note.id]: action.note});
    default:
      return state;
  }
};

export default noteDetailReducer;
