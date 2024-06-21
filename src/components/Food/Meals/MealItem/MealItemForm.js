import React, {useRef, useState} from 'react';
import Input from '../../../UI/Input/Input';
import styles from './MealItemForm.module.scss';

// props = {id, onAddToCart}
const MealItemForm = (props) => {

  // 선택한 수량 값
  // const [amount, setAmount] = useState(0);

  // 선택한 수량 값 가져오기
  const inputRef = useRef();
  const submitHandler = e => {
    e.preventDefault();
    const selectedAmount = inputRef.current.value;
    console.log('select: ', selectedAmount);

    props.onAddToCart(selectedAmount); // MealItem 으로 amount 전달
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        ref={inputRef}
        label='수량'
        inputAttr={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>담기</button>
    </form>
  );
};

export default MealItemForm;
