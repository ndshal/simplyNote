import { connect } from 'react-redux';
import Home from './home';

const mapStateToProps = state => ({
  currentUser: state.currentUser
});

const mapDispatchToProps = dispach => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
