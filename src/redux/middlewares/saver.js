import T from '../actions/types';

const saver = store => next => action => {
  let result = next(action);

  if (
    action.type !== T.CHANGE_AMOUNT &&
    action.type !== T.ADD_TO_CART &&
    action.type !== T.REMOVE_FROM_CART
  )
    return;

  localStorage['cart'] = JSON.stringify(store.getState().cart);
  return result;
};

export default saver;
