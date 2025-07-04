import React from 'react';
import AddToCartButton from './components/AddToCartButton';
import CartDisplay from './components/CartDisplay';

const App = () => {
  return (
    <div>
      <h1>Shopping Cart </h1>
      <AddToCartButton />
      <CartDisplay />
    </div>
  );
};

export default App;
