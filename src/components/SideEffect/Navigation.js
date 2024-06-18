import React from 'react';
import styles from './Navigation.module.css'

const Navigation = ({onLogout}) => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <a href="/">MyPage</a>
        </li>
        <li>
          <a href="/">Admin</a>
        </li>
        <li>
          <a href="/" onClick={onLogout}>Logout</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;