import React from 'react';
import styles from './Input.module.scss';

const Input = ({label}) => {
  return (
    <div className={styles.input}>
      <lable>{label}</lable>
      <input />
    </div>
  );
};

export default Input;