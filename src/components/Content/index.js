import React from 'react';
import './style.css';
import Product from './Product';
import { isLoaded } from '../../utils';

// import products from '../../temp/data';

const Content = ({ store }) => {
  const state = store.getState();
  const products = state.products.data;
  const isLoadingData = state.products.isLoadingData;

  return (
    <section className="content">
      <h2 className="content__title">Пекарня</h2>
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
