export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const receiveErrors = (subtype, errors) => ({
  type: RECEIVE_ERRORS,
  subtype,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});
