import { createStore, combineReducers, applyMiddleware } from 'redux';
import { cart, categories, products } from '../reducers';
import saver from '../middlewares/saver';
import logger from '../middlewares/logger';
import apiMiddleware from '../middlewares/api';

const storeFactory = initialState =>
  applyMiddleware(logger, saver, apiMiddleware)(createStore)(
    combineReducers({ cart, categories, products }),
    initialState
  );

export default storeFactory;
