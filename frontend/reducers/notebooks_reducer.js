import {
  RECEIVE_ALL_NOTEBOOKS,
  RECEIVE_SINGLE_NOTEBOOK,
  REMOVE_NOTEBOOK
} from '../actions/notebooks_actions';
import { merge } from 'lodash';

const notebooksReducer = (state={}, action) => {

  console.log(action);

  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_NOTEBOOKS:
      return action.notebooks;
    case RECEIVE_SINGLE_NOTEBOOK:
      return merge({}, state, {[action.notebook.id]: action.notebook});
    case REMOVE_NOTEBOOK:
      const newState = merge({}, state);
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
};

export default notebooksReducer;
