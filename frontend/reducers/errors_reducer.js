import { RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/errors_actions';
import { merge } from 'lodash';

const _emptyState = {
  signin: [],
  signup: [],
  createForm: []
};

const errorsReducer = (state = _emptyState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ERRORS:
      return merge({}, state, {[action.subtype]: action.errors});
    case CLEAR_ERRORS:
      return _emptyState;
    default:
      return state;
  }
};

export default errorsReducer;
