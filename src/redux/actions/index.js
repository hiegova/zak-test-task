import { apiAction } from './api';
import T from './types';

export const fetchCategories = url =>
  apiAction({
    url,
    onSuccess: setCategories,
    onFailure: () => console.log('Error occured loading categories'),
    label: T.FETCH_CATEGOTIES
  });

export const setCategories = data => ({
  type: T.SET_CATEGORIES,
  payload: data
});

export const fetchPtoducts = url =>
  apiAction({
    url,
    onSuccess: setProducts,
    onFailure: () => console.log('Error occured loading products'),
    label: T.FETCH_PRODUCTS
  });

export const setProducts = data => ({
  type: T.SET_PRODUCTS,
  payload: data.results
});

export const addToCart = product => ({
  type: T.ADD_TO_CART,
  ...product
});

export const removeFromCart = ean => ({
  type: T.REMOVE_FROM_CART,
  ean
});

export const changeAmount = (ean, cartAmount) => ({
  type: T.CHANGE_AMOUNT,
  ean,
  cartAmount
});
