import React, { ReactElement } from 'react';

import styles from './simple-counter.module.scss';

interface SimpleCounterProps {
  label: string;
  value: number;
}

const SimpleCounter = ({ label, value }: SimpleCounterProps): ReactElement => {
  const formattedValue = value.toString().padStart(2, '0');

  return (
    <div className={styles['simple-counter']}>
      <div className={styles['simple-counter__value']}>{formattedValue}</div>
      <div className={styles['simple-counter__label']}>{label}</div>
    </div>
  );
};

export default SimpleCounter;
