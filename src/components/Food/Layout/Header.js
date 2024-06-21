import React from 'react';
import styles from './Header.module.scss';

// 정적 이미지 로딩
import foodImage from '../../../assets/img/meals.jpg';
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {

  console.log('styles: ', styles);

  const {header, 'main-image':mainImage} = styles;

  return (
    <>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={styles.mainImage}>
        <img src={foodImage} alt="뷔페"/>
      </div>
    </>
  );
};

export default Header;