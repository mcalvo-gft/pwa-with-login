import React, { ChangeEvent, ReactElement, useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import Button from 'components/form/button/button';
import InputText from 'components/form/input-text/input-text';
import { ValidatorForm } from 'react-material-ui-form-validator';
import * as AuthenticationService from 'services/authentication.service';
import { AuthContext } from 'context/auth.context';
import lockIcon from 'assets/icons/lock.svg';

import styles from './login.module.scss';

const Login = (): ReactElement => {
  const authContext = useContext(AuthContext);
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (name: string) => (event: ChangeEvent<HTMLInputElement>) => {
    setFormData((formData) => ({ ...formData, [name]: event.target.value }));
  };

  const handleSubmit = () => {
    AuthenticationService.login(formData.email, formData.password);
  };

  return authContext?.isLoggedIn === false ? (
    <div className={styles.login}>
      <img src={lockIcon} />
      <ValidatorForm onSubmit={handleSubmit} noValidate>
        <InputText
          required
          label="Email"
          name="email"
          autoComplete="email"
          type="email"
          value={formData.email}
          onChange={handleChange('email')}
          validators={['required', 'isEmail']}
          errorMessages={['this field is required', 'email is not valid']}
        />
        <InputText
          required
          label="Password"
          name="password"
          autoComplete="current-password"
          type="password"
          value={formData.password}
          onChange={handleChange('password')}
          validators={['required']}
          errorMessages={['this field is required']}
        />
        <div className={styles.login__actions}>
          <Button variant="contained" color="primary" type="submit">
            Log in
          </Button>
        </div>
      </ValidatorForm>
    </div>
  ) : (
    <Redirect to={{ pathname: 'welcome' }} />
  );
};

export default Login;
