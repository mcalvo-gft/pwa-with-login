import React, { ReactElement } from 'react';
import { TextValidator, ValidatorComponentProps } from 'react-material-ui-form-validator';

import styles from './input-text.module.scss';

const InputText = (props: ValidatorComponentProps): ReactElement => {
  return <TextValidator {...props} classes={{ root: styles.root }} />;
  // const { className, ...other } = props;
  // return <TextValidator {...other} classes={{ root: `${styles.root} ${className}` }} />;
};

export default InputText;
