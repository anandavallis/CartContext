import React from 'react';
import { useCart } from '../context/CartContext';

const AddToCartButton = () => {
  const { addToCart } = useCart();

  return <button onClick={addToCart}>Add to Cart</button>;
};

export default AddToCartButton;
