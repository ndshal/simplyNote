import {
  RECEIVE_ALL_NOTES,
  RECIEVE_SINGLE_NOTE,
  REMOVE_NOTE
} from '../actions/notes_actions';
import { merge } from 'lodash';

const notesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_NOTES:
      return action.notes;
    case RECIEVE_SINGLE_NOTE:
      return merge({}, state, {[action.note.id]: action.note});
    case REMOVE_NOTE:
      const newState = merge({}, state);
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
};

export default notesReducer;
