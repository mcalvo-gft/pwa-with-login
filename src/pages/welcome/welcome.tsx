import React, { ReactElement, useContext } from 'react';
import LastAccessCounter from 'components/last-access-counter/last-access-counter';
import * as AuthenticationService from 'services/authentication.service';
import Button from 'components/form/button/button';
import { AuthContext } from 'context/auth.context';

import styles from './welcome.module.scss';

const Welcome = (): ReactElement => {
  const authContext = useContext(AuthContext);
  const lastAccess = authContext && authContext.user ? authContext.user.lastSignInTime : null;

  const handleLogout = () => AuthenticationService.logout();

  return (
    <div className={styles.welcome}>
      <div className={styles.welcome__header}>
        <h1 className={styles.welcome__title}>Welcome!</h1>
        <p className={styles.welcome__message}>The last time you accessed was</p>
      </div>
      {lastAccess !== null && <LastAccessCounter lastAccessTime={lastAccess} />}
      <div className={styles.welcome__actions}>
        <Button onClick={handleLogout}>LOGOUT</Button>
      </div>
    </div>
  );
};

export default Welcome;
