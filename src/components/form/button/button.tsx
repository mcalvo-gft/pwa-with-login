import React, { ReactElement } from 'react';
import Button, { ButtonProps } from '@material-ui/core/Button';

import styles from './button.module.scss';

const CustomButton = (props: ButtonProps): ReactElement => {
  const { className, ...other } = props;

  return (
    <Button
      {...other}
      className={`${styles.overwrite} ${className}`}
      classes={{ root: styles.root, label: styles.label }}
      variant="contained"
      color="primary"
    >
      {props.children}
    </Button>
  );
};

export default CustomButton;
