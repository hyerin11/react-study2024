import React from 'react';
import CartContext from './cart-context';

//reducer: 여러가지 복잡한 상태관리를 단순화시키며 중앙집중화한다.
//리듀서 함수 정의


const CartProvider = ({children}) => {

    //Provider가 실제로 관리할 상태들의 구체적인 내용들
    const CartContext = {
        cartItem: [],
        addItem: item => {},
        removeItem: id => {},
    };

  return 
    <CartContext.Provider value={CartContext}>
        {children}
    </CartContext.Provider>
  
};

export default CartProvider;