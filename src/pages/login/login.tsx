import React, { ReactElement } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import styles from './login.module.scss';

const Login = (): ReactElement => {
  return (
    <div className={styles.login}>
      Login
      <TextField label="Email" />
      <TextField label="Password" type="password" />
      <Button variant="contained" color="primary">
        Log In
      </Button>
    </div>
  );
};

export default Login;
