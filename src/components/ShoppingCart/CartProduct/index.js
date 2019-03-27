import React from 'react';
import './style.css';
import { formatPrice } from '../../../utils';
import { changeAmount, removeFromCart } from '../../../redux/actions/index';

const CartProduct = ({ product, store }) => {
  const { img, title, price, weight, volume, cartAmount } = product;

  // const state = store.getState();
  const totalPrice = cartAmount * price;

  const onIncrease = () => {
    store.dispatch(changeAmount(product.ean, cartAmount + 1));
  };

  const onDecrease = () => {
    if (cartAmount === 1) {
      store.dispatch(removeFromCart(product.ean));
      return;
    }
    store.dispatch(changeAmount(product.ean, cartAmount - 1));
  };

  return (
    <div className="cart-product">
      <img className="cart-product__image" src={img.s150x150} alt={title} />
      <div className="cart-product__details">
        <p className="cart-product__title">{title}</p>
        <span className="cart-product__price">
          {formatPrice(price)}
          <span className="cart-product__curency"> грн</span>
        </span>
        <span className="cart-product__volume">{weight || volume} г</span>
      </div>
      <div
        className="quantity-selector quantity-selector--float-cart"
        style={{ display: cartAmount > 0 ? 'flex' : 'none' }}
      >
        <button className="quantity-selector__minus" onClick={onDecrease} />
        <div className="quantity-selector__display">{cartAmount} шт</div>
        <button className="quantity-selector__plus" onClick={onIncrease} />
      </div>
      <p className="cart-product__total-price">
        {formatPrice(totalPrice)}
        <span className="cart-product__total-curency"> грн</span>
      </p>
    </div>
  );
};

export default CartProduct;
