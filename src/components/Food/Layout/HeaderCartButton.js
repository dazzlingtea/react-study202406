import React, {useContext} from 'react';
import CartIcon from "./CartIcon";
import styles from './HeaderCartButton.module.scss';
import CartContext from "../../../store/cart-context";

const HeaderCartButton = ({ onShow }) => {

  const {button, icon, badge} = styles;

  const {cartItems} = useContext(CartContext);

  // const calcTotalAmount = () => {
  //   let totalAmount = 0;
  //   for(const item of cartItems) {
  //     totalAmount += item.amount;
  //   }
  //   return totalAmount;
  // };
  const numberOfCart = cartItems.reduce((accum, current)=> accum + current.amount, 0);

  // let result = 0;
  // if(cartItems.length > 0) {
  //   result = cartItems
  //             .map(item=> item.amount)
  //             .reduce((count, amount)=> count + amount);
  // }

  return (
    <button className={button} onClick={onShow}>
      <span className={icon}>
        <CartIcon/>
      </span>
      <span>My Cart</span>
      {/*<span className={badge}>{result}</span>*/}
      {/*<span className={badge}>{calcTotalAmount()}</span>*/}
      <span className={badge}>{numberOfCart}</span>
    </button>
  );
};

export default HeaderCartButton;