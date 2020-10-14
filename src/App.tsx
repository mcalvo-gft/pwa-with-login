import React, { lazy, ReactElement, Suspense } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Login from './pages/login/login';
import NotFound from './pages/not-found/not-found';
import 'fontsource-roboto';

// import styles from 'styles/app.scss';

const Welcome = lazy(() => import('./pages/welcome/welcome'));
const WelcomeAsync = () => (
  <Suspense fallback="loading...">
    <Welcome />
  </Suspense>
);

function App(): ReactElement {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/welcome" />
          </Route>
          <Route exact path="/login" component={Login} />
          <Route exact path="/welcome" component={WelcomeAsync}></Route>
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
