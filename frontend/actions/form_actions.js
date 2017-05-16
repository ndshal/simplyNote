export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveErrors = (formType, errors) => ({
  type: RECEIVE_ERRORS,
  formType,
  errors
});
