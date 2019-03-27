import React from 'react';
import './style.css';
import Product from './Product';
import { isLoaded } from '../../utils';

const Content = ({ store }) => {
  const state = store.getState();
  const products = state.products.data;
  const isLoadingData = state.products.isLoadingData;

  const getActivCategoryName = () => {
    const activeClassElem = document.querySelector('.nav__list-button--active');
    return activeClassElem ? activeClassElem.textContent : null;
  };

  return (
    <section className="content">
      {getActivCategoryName() ? (
        <h2 className="content__title">{getActivCategoryName()}</h2>
      ) : (
        ''
      )}
      <div className="content__products">
        {isLoadingData ? (
          <span>Загрузка...</span>
        ) : isLoaded(products) ? (
          products.map(product => (
            <Product key={product.ean} product={product} store={store} />
          ))
        ) : (
          <span>0 товаров загружено...</span>
        )}
      </div>
    </section>
  );
};

export default Content;
