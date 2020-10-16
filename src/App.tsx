import React, {
  lazy,
  LazyExoticComponent,
  ReactElement,
  Suspense,
  useEffect,
  useState,
} from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Login from './pages/login/login';
import * as AuthenticationService from 'services/authentication.service';
import PrivateRoute from 'components/private-route/private-route';
import { AuthContext } from 'context/auth.context';
import { User } from 'types/types';
import 'fontsource-roboto';

import 'styles/app.scss';

const componentAsync = (Element: LazyExoticComponent<() => ReactElement>) => () => (
  <Suspense fallback={<></>}>
    <Element />
  </Suspense>
);
const Welcome = lazy(() => import('./pages/welcome/welcome'));
const NotFound = lazy(() => import('./pages/not-found/not-found'));
const WelcomeAsync = componentAsync(Welcome);
const NotFoundAsync = componentAsync(NotFound);

function App(): ReactElement {
  const [user, setUser] = useState<User | null>(null);
  const [authCheck, setAuthCheck] = useState(false);

  useEffect(() => {
    AuthenticationService.onAuthStateChanged((user: User | null) => {
      setUser(user);
      setAuthCheck(true);
    });
  }, []);

  return (
    <div className="App">
      <AuthContext.Provider value={{ isLoggedIn: !!user, user }}>
        {authCheck && (
          <Router>
            <Switch>
              <Route exact path="/">
                <Redirect to="/welcome" />
              </Route>
              <Route exact path="/login" component={Login} />
              <PrivateRoute exact path="/welcome" component={WelcomeAsync}></PrivateRoute>
              <Route component={NotFoundAsync} />
            </Switch>
          </Router>
        )}
      </AuthContext.Provider>
    </div>
  );
}

export default App;
