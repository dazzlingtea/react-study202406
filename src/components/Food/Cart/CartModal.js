import React from 'react';
import styles from './CartModal.module.scss';
import backdrop from "bootstrap/js/src/util/backdrop";

const ModalOverlay = ({children}) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
};

const CartModal = ({children, onClose}) => {

  return (
    <>
      <div className={styles.backdrop} onClick={onClose} />
      <ModalOverlay>
        {children}
      </ModalOverlay>
    </>
  );
};

export default CartModal;