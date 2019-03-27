import C from './constatns';
import { API } from '../utils';
import { fetch } from 'whatwg-fetch';
// import 'whatwg-fetch';

export const addToCart = product => ({
  type: C.ADD_TO_CART,
  ...product
});

export const removeFromCart = ean => ({
  type: C.REMOVE_FROM_CART,
  ean
});

export const changeAmount = (ean, amount) => ({
  type: C.CHANGE_AMOUNT,
  ean,
  amount
});

const fetchCategoriesSucceeded = (categories = []) => ({
  type: C.FETCH_CATEGOTIES,
  categories
});

export const fetchCategories = api => dispatch => {
  fetch(api)
    .then(resp => resp.json())
    .then(data => dispatch(fetchCategoriesSucceeded(data)));
};

export const fetchProducts = category_id => ({
  type: C.FETCH_PRODUCTS,
  products: fetch(API.products(category_id))
    .then(res => res.json())
    .then(obj => obj.results)
});

export const loadingCategories = () => ({
  type: C.LOADING_CATEGORIES
});
