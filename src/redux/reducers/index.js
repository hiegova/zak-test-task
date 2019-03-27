import T from '../actions/types';

export const product = (state = {}, action) => {
  switch (action.type) {
    case T.ADD_TO_CART:
      return {
        ...action,
        cartAmount: 1
      };
    case T.CHANGE_AMOUNT:
      return state.ean !== action.ean
        ? state
        : {
            ...state,
            cartAmount: action.cartAmount
          };
    default:
      return state;
  }
};

export const cart = (state = [], action) => {
  switch (action.type) {
    case T.ADD_TO_CART:
      return [...state, product({}, action)];
    case T.REMOVE_FROM_CART:
      return state.filter(p => p.ean !== action.ean);
    case T.CHANGE_AMOUNT:
      return state.map(p => product(p, action));
    default:
      return state;
  }
};

export const categories = (state = {}, action) => {
  switch (action.type) {
    case T.SET_CATEGORIES:
      return { data: action.payload };
    case T.API_START:
      if (action.payload === T.FETCH_CATEGOTIES) {
        return {
          ...state,
          isLoadingData: true
        };
      }
      return state;
    case T.API_END:
      if (action.payload === T.FETCH_CATEGOTIES) {
        return {
          ...state,
          isLoadingData: false
        };
      }
      return state;
    default:
      return state;
  }
};

export const products = (state = {}, action) => {
  switch (action.type) {
    case T.SET_PRODUCTS:
      return { ...state, data: action.payload };
    case T.API_START:
      if (action.payload === T.FETCH_PRODUCTS) {
        return {
          ...state,
          isLoadingData: true
        };
      }
      return state;
    case T.API_END:
      if (action.payload === T.FETCH_PRODUCTS) {
        return {
          ...state,
          isLoadingData: false
        };
      }
      return state;
    default:
      return state;
  }
};
