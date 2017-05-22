import { connect } from 'react-redux';
import { signout } from '../../actions/session_actions';
import { fetchAllNotebooks } from '../../actions/notebooks_actions';
import Home from './home';

const mapStateToProps = state => ({
  currentUser: state.currentUser
});

const mapDispatchToProps = dispatch => ({
  signout: () => dispatch(signout()),
  fetchAllNotebooks: () => dispatch(fetchAllNotebooks()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
