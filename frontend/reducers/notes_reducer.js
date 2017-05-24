import {
  RECEIVE_ALL_NOTES,
  REMOVE_NOTE,
  RECEIVE_SINGLE_NOTE
} from '../actions/notes_actions';
import { merge } from 'lodash';

const notesReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_ALL_NOTES:
      return action.notes;
    case RECEIVE_SINGLE_NOTE:
      const trimmedNote = merge({}, action.note);
      delete trimmedNote.body;
      delete trimmedNote.tag_names;
      newState[trimmedNote.id] = trimmedNote;
      return newState;
    case REMOVE_NOTE:
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
};

export default notesReducer;
