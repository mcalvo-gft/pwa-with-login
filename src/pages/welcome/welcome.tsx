import React, { ReactElement, useEffect, useState } from 'react';
import LastAccessCounter from 'components/last-access-counter/last-access-counter';
import * as AuthenticationService from 'services/authentication.service';
import Button from 'components/form/button/button';

import styles from './welcome.module.scss';

const Welcome = (): ReactElement => {
  const [lastAccess, setLastAccess] = useState<Date | null>(null);

  const handleLogout = () => AuthenticationService.logout();

  useEffect(() => {
    AuthenticationService.getLastAccess().then(
      (time) => time instanceof Date && setLastAccess(time)
    );
  }, []);

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
