import React from 'react';
import { Route, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const Auth = ({component: Component, path, loggedIn}) => (
    <Route path={path} render={(props) => (
        !loggedIn? (
          <Component {...props} />
        ) : (
          <Redirect to='/home' />
        )
      )
  } />
);

const Protected = ({component: Component, path, loggedIn}) => (
  <Route path={path} render={(props) => (
      loggedIn? (
        <Component {...props} />
      ) : (
        <Redirect to='/splash/signin' />
      )
    )
  } />
);

const mapStateToProps = state => ({
  loggedIn: Boolean(state.currentUser.id)
});

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
