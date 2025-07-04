import React from 'react';
import { useCart } from '../context/CartContext';

const CartDisplay = () => {
  const { cartCount, resetCart } = useCart();

  return (
    <div>
      <h2>Cart Items: {cartCount}</h2>
      {cartCount > 0 && <button onClick={resetCart}>Reset Cart</button>}
    </div>
  );
};

export default CartDisplay;
