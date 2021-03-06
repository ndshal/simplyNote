import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const currentUserReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return action.currentUser;
    default:
      return state;
  }
};

export default currentUserReducer;
