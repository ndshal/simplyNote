import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signin, signup } from '../../actions/session_actions';

const mapStateToProps = (state, { location }) => {
  const formType = location.pathname.slice(1);
  return {
    formType,
    errors: state.errors[formType],
    loggedIn: Boolean(state.currentUser)
  };
};

const mapDispatchToProps = (dispatch, { location } ) => {
  const formType = location.pathname.slice(1);
  const action = formType === 'signin' ? signin : signup;
  return { processFrom: user => dispatch(action(user)) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
