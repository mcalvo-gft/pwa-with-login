import React, { ReactElement } from 'react';
import Button from 'components/form/button/button';
import { useHistory } from 'react-router-dom';

import styles from './not-found.module.scss';

const NotFound = (): ReactElement => {
  const history = useHistory();

  const handleGoToHome = () => history.push('/');

  return (
    <div>
      <div className={styles['not-found__title']}>404</div>
      <div className={styles['not-found__action']}>
        <Button onClick={handleGoToHome}>Go Home</Button>
      </div>
    </div>
  );
};

export default NotFound;
