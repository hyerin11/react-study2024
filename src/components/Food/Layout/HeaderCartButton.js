import React, { useContext, useEffect, useState } from 'react';
import CartIcon from './CartIcon';
import styles from './HeaderCartButton.module.scss';
import CartContext from '../../../store/cart-context';

const HeaderCartButton = ({ onShow }) => {

  //bump 애니메이션을 제어하는 상태변수
  const [isBump, setIsBump] = useState(false);

  //장바구니 배열
  const { cartItems } = useContext(CartContext);

  const numberOfCart = cartItems.reduce((accum, current) => accum + current.amount, 0);

  const {button, icon, badge, bump} = styles;

  useEffect(()=>{

    if(cartItems.length === 0) return; //처음에는 효과 없게

    //console.log('userEffect 실행');
    setIsBump(true);

    //애니메이션 실행 후 클래스 제거
    const timer = setTimeout(()=>{
      setIsBump(false);
    }, 300)
   return () => clearTimeout(timer);
   
  }, [cartItems]);

  return (
    <button className={`${button} ${isBump ? bump : undefined}`} onClick={onShow}>
      <span className={icon}>
        <CartIcon />
      </span>
      <span>My Cart</span>
      <span className={badge}>{numberOfCart}</span>
    </button>
  );
};

export default HeaderCartButton;
