import React from 'react';
import CartContext from "./cart-context";

// 중앙관리 상태값 (state)
const defaultState = {
  items: [] ,// 장바구니 배열 상태값
  totalPrice: 0, // 총액 상태값
};

// reducer: 여러가지 복잡한 상태관리를 단순화시키며 중앙집중화한다.
// 리듀서 함수 정의
// state: 업데이트 이전의 상태값
// action: 어떤 업데이트를 하는지 정보와 업데이트에 필요한 값을 가진 객체
const cartReducer = (state, action) => {
  if(action.type === 'ADD') { // 장바구니 추가
    // 상태 업데이트 코드
    // 장바구니 배열 상태 업데이트
    const updateCartItems = [...state.items, action.value];

    // 총액 상태 업데이트
    const updatePrice = state.totalPrice
                        + (action.value.price * action.value.amount);

    return {
      items: updateCartItems,
      totalPrice: updatePrice
    }; // 새로운 상태
  } else if(action.type === 'REMOVE') { // 장바구니 제거

    return null; // 새로운 상태
  }

  return defaultState; // 새로운 상태
};

const CartProvider = ({children}) => {

  //

  const addItemHandler = item => {
      console.log("장바구니에 데이터 추가! - ", item);
  };

  // Provider가 실제로 관리할 상태들의 구체적인 내용들
  const cartContext = {
    cartItems: [], // 상태값
    addItem: addItemHandler, // 상태를 업데이트하는 함수
    // addItem: item => {}, // 상태를 업데이트하는 함수
    removeItem: id => {},
  };

  return (
    <CartContext.Provider value={cartContext}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;