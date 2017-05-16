import * as SessionAPIUtil from '../util/session_api_util';
import { receiveErrors } from './errors_actions';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const signin = user => dispatch => (
  SessionAPIUtil.signin(user)
    .then(currentUser => dispatch(receiveCurrentUser(currentUser)))
    .fail(err => dispatch(receiveErrors('signin', err.responseJSON)))
);

export const signup = user => dispatch => (
  SessionAPIUtil.signup(user)
    .then(currentUser => dispatch(receiveCurrentUser(currentUser)))
    .fail(err => dispatch(receiveErrors('signup', err.responseJSON)))
);

export const signout = () => dispatch => (
  SessionAPIUtil.signout()
    .then(() => dispatch(receiveCurrentUser(null)))
    .fail(err => console.log('signin', err.responseJSON))
);
