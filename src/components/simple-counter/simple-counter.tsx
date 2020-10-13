import React, { ReactElement } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import styles from './login.module.scss';

interface SimpleCounterProps {
  label: string;
  value: number;
}

const SimpleCounter = ({ label, value }: SimpleCounterProps): ReactElement => {
  return (
    <div>
      <div>{value}</div>
      <div>{label}</div>
    </div>
  );
};

export default SimpleCounter;
