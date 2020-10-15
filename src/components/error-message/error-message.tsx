import React, { ReactElement } from 'react';

import styles from './error-message.module.scss';

const ErrorMessage = ({ error }: { error: Error }): ReactElement => {
  return <div className={styles['error-message']}>{error.message}</div>;
};

export default ErrorMessage;
