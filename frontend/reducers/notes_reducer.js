import {
  RECEIVE_ALL_NOTES,
  REMOVE_NOTE,
  RECEIVE_SINGLE_NOTE
} from '../actions/notes_actions';
import { merge } from 'lodash';

const notesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_NOTES:
      return action.notes;
    case RECEIVE_SINGLE_NOTE:
      const trimmedNote = merge({}, action.note);
      delete trimmedNote.body;
      return merge({}, state, {[trimmedNote.id]: trimmedNote});
    case REMOVE_NOTE:
    const newState = merge({}, state);
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
};

export default notesReducer;
