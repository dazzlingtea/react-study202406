import React from 'react';
import styles from './Input.module.scss';

const Input = ({ label, inputAttr }) => {
  return (
    <div className={styles.input}>
      <lable htmlFor={inputAttr.id}>{label}</lable>
      <input {...inputAttr} />
    </div>
  );
};

export default Input;