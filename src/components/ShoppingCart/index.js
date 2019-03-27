import React from 'react';
import './style.css';
import { formatPrice } from '../../utils';
import FloatCart from './FloatCart';

const ShoppingCart = ({ store }) => {
  const state = store.getState();
  const cart = state.cart;

  const openCart = () => {
    document.getElementsByClassName('float-cart')[0].style.display = 'flex';
  };

  const totalAmount = cart
    .map(product => product.cartAmount)
    .reduce((a, b) => a + b, 0);

  const totalPrice =
    totalAmount * cart.map(product => product.price).reduce((a, b) => a + b, 0);

  return (
    <React.Fragment>
      <div className="shopping-cart" onClick={openCart}>
        <div className="shopping-cart__icon">
          <span
            className="shopping-cart__amount"
            style={{ display: totalAmount > 0 ? 'block' : 'none' }}
          >
            {totalAmount}
          </span>
        </div>
        <p className="shopping-cart__total">{formatPrice(totalPrice)}</p>
      </div>
      <FloatCart totalPrice={totalPrice} store={store} />
    </React.Fragment>
  );
};

export default ShoppingCart;
