import * as SessionAPIUtil from '../util/session_api_util';
import { receiveErrors, clearErrors } from './errors_actions';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const signin = user => dispatch => (
  SessionAPIUtil.signin(user)
    .then(
      currentUser => dispatch(receiveCurrentUser(currentUser)),
      err => dispatch(receiveErrors('signin', err.responseJSON))
    )
    .then(() => dispatch(clearErrors()))
);

export const signup = user => dispatch => (
  SessionAPIUtil.signup(user)
    .then(
      currentUser => dispatch(receiveCurrentUser(currentUser)),
      err => dispatch(receiveErrors('signup', err.responseJSON))
    )
    .then(() => dispatch(clearErrors()))
);

export const signout = () => dispatch => (
  SessionAPIUtil.signout()
    .then(
      () => dispatch(receiveCurrentUser(null)),
      err => console.log('signin', err.responseJSON)
    )
    .then(() => dispatch(clearErrors()))
);
