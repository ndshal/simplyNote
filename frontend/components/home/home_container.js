import { connect } from 'react-redux';
import { signout } from '../../actions/session_actions';
import Home from './home';


const mapStateToProps = state => ({
  currentUser: state.currentUser
});

const mapDispatchToProps = dispatch => ({
  signout: () => dispatch(signout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
