import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signin, signup } from '../../actions/session_actions';
import { clearErrors } from '../../actions/errors_actions';

const mapStateToProps = (state, { location }) => {
  const formType = location.pathname.slice(8);
  return {
    formType,
    errors: state.errors[formType],
    loggedIn: Boolean(state.currentUser.id)
  };
};

const mapDispatchToProps = (dispatch, { location } ) => {
  const formType = location.pathname.slice(8);
  const action = formType === 'signin' ? signin : signup;
  return {
    processForm: user => dispatch(action(user)),
    clearErrors: () => dispatch(clearErrors())};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
