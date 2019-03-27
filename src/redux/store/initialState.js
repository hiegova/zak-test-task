const getLocalCart = () =>
  localStorage['cart'] ? JSON.parse(localStorage['cart']) : [];

const initialState = {
  cart: getLocalCart(),
  categories: { isLoadingData: false },
  products: { isLoadingData: false }
};

export default initialState;
