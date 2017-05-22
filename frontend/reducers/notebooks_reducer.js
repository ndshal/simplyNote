import {
  RECEIVE_ALL_NOTEBOOKS,
  RECEIVE_SINGLE_NOTEBOOK,
  REMOVE_NOTEBOOK
} from '../actions/notebooks_actions';
import { merge } from 'lodash';

const notebooksReducer = (state={}, action) => {
  Object.freeze(state);
  switch (action.type) {
    default:
      return state;
  }
};

export default notebooksReducer;
