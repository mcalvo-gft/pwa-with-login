import React, { ReactElement, useContext } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { AuthContext } from 'context/auth.context';

const PrivateRoute = ({ component: Component, ...other }: RouteProps): ReactElement => {
  const authContext = useContext(AuthContext);

  return (
    <Route
      {...other}
      render={(props) =>
        authContext && authContext.isLoggedIn ? (
          // @ts-ignore
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: 'login' }} />
        )
      }
    />
  );
};

export default PrivateRoute;
