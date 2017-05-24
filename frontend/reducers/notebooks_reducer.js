import {
  RECEIVE_ALL_NOTEBOOKS,
  RECEIVE_SINGLE_NOTEBOOK,
  REMOVE_NOTEBOOK
} from '../actions/notebooks_actions';
import { merge } from 'lodash';

const _defaultState = {
  byId: {},
  defaultId: null
};

const notebooksReducer = (state=_defaultState, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_ALL_NOTEBOOKS:
      return action.notebooks;
    case RECEIVE_SINGLE_NOTEBOOK:
      newState.byId[action.notebook.id] = action.notebook;
      return newState;
    case REMOVE_NOTEBOOK:
      delete newState.byId[action.id];
      return newState;
    default:
      return state;
  }
};

export default notebooksReducer;
