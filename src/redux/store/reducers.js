import C from './constatns';

export const product = (state = {}, action) => {
  switch (action.type) {
    case C.ADD_TO_CART:
      return {
        ...action,
        cartAmount: 1
      };
    case C.CHANGE_AMOUNT:
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
    case C.ADD_TO_CART:
      return [...state, product({}, action)];
    case C.REMOVE_FROM_CART:
      return state.filter(p => p.ean !== action.ean);
    case C.CHANGE_AMOUNT:
      return state.map(p => product(p, action));
    default:
      return state;
  }
};

export const data = (state = [], action) => {
  switch (action.data) {
    case C.FETCH_CATEGOTIES:
      return { date: action.data };
    case C.API_START:
    default:
      return state;
  }
};

export const categoies = (state = {}, action) => {
  switch (action.type) {
    case C.FETCH_CATEGOTIES:
      return { date: action.data };
    case C.API_START:
    // if (action.type)
    default:
      return state;
  }
};

export const products = (state = [], action) => {
  switch (action.type) {
    case C.FETCH_PRODUCTS:
      return Array.isArray(action.products) ? action.categories : state;
    default:
      return state;
  }
};
