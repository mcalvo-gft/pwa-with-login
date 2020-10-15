import React, { ReactElement, useContext } from 'react';
import LastAccessCounter from 'components/last-access-counter/last-access-counter';
import * as AuthenticationService from 'services/authentication.service';
import Button from 'components/form/button/button';
import { AuthContext } from 'context/auth.context';
import Avatar from '@material-ui/core/Avatar';

import styles from './welcome.module.scss';

const Welcome = (): ReactElement => {
  const authContext = useContext(AuthContext);
  const user = authContext?.user;
  const lastAccess = user ? user.lastSignInTime : null;
  const userName = user ? user.name : null;
  const userAvatar = user ? user.avatar : null;
  const welcomeMessage = `Welcome${userName ? ` ${userName}` : ''}!`;

  const handleLogout = () => AuthenticationService.logout();

  return (
    <div className={styles.welcome}>
      <div className={styles.welcome__header}>
        <Avatar
          src={userAvatar || undefined}
          className={`${styles.welcome__avatar} ${styles.overwrite} ${
            userAvatar ? styles['welcome__avatar--active'] : ''
          }`}
        />
        <h1 className={styles.welcome__title}>{welcomeMessage}</h1>
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
