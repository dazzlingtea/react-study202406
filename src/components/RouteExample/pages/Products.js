import React from 'react';
import {Link} from 'react-router-dom';

const Products = () => {
  console.log('products 실행!');
  return (
    <>
      <h1>My Products Page</h1>
      <p>
        <Link to={'/'}>Home</Link>페이지로 이동하기
      </p>
    </>
  );
};

export default Products;