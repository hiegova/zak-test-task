import React from 'react';
import './style.css';
import CartProduct from '../CartProduct';
import { formatPrice } from '../../../utils';

const FloatCart = ({ totalPrice, store }) => {
  const state = store.getState();
  const cart = state.cart;

  const onClose = () => {
    document.getElementsByClassName('float-cart')[0].style.display = 'none';
  };

  return (
    <div className="float-cart">
      <header className="float-cart-header">
        <h2 className="float-cart-header__title">Кошик</h2>
        <button className="float-cart-header__close-btn" onClick={onClose} />
      </header>
      <div className="float-cart-content">
        {cart.length > 0
          ? cart.map(product => (
              <CartProduct key={product.ean} product={product} store={store} />
            ))
          : ''}
      </div>
      <footer className="float-cart-footer">
        <button className="float-cart-footer__order-btn">Замовити</button>
        <span className="float-cart-footer__total-price">
          Всього: {formatPrice(totalPrice)}
        </span>
      </footer>
    </div>
  );
};

export default FloatCart;
