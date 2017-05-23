import {
  RECEIVE_ALL_TAGS,
  RECEIVE_SINGLE_TAG,
  REMOVE_TAG
} from '../actions/tags_actions';
import { merge } from 'lodash';

const tagsReducer = (state={}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_TAGS:
      return action.tags;
    default:
      return state;
  }
};

export default tagsReducer;
