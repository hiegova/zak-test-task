import React from 'react';
import './style.css';
import {
  addToCart,
  changeAmount,
  removeFromCart
} from '../../../redux/actions/index';
import { amountInCart, formatPrice, truncate } from '../../../utils';
import noImg from './img/no-img-icon.png';

const Product = ({ product, store }) => {
  const state = store.getState();
  const cartAmount = amountInCart(state.cart, product);

  const onAddToCart = () => {
    store.dispatch(addToCart(product));
  };

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
    <div className="product">
      <div className="product_img-wrapper">
        <img
          className="product__image"
          src={product.img.s150x150 ? product.img.s150x150 : noImg}
          alt={product.title}
        />
      </div>
      <p className="product__price">
        {formatPrice(product.price)}
        <span className="product__curency"> грн</span>
      </p>
      <div className="product__title-containrer">
        <p className="product__title">{truncate(product.title, 50)}</p>
        <span className="product__volume">
          <br />
          <br />
          {product.weight
            ? product.weight + ' г'
            : product.volume
            ? product.volume + ' г'
            : ''}
        </span>
      </div>
      <div className="add-to-cart">
        <button
          className="add-to-cart__btn"
          onClick={onAddToCart}
          style={{ display: cartAmount > 0 ? 'none' : 'block' }}
        >
          Додати <span className="add-to-cart__icon" />
        </button>
        <div
          className="quantity-selector"
          style={{ display: cartAmount > 0 ? 'flex' : 'none' }}
        >
          <button className="quantity-selector__minus" onClick={onDecrease} />
          <div className="quantity-selector__display">{cartAmount} шт</div>
          <button className="quantity-selector__plus" onClick={onIncrease} />
        </div>
      </div>
    </div>
  );
};
export default Product;
