export const API = {
  categories: 'https://staging-stores-api.zakaz.ua/stores/default/categories/',
  products(category_id) {
    return `https://staging-stores-api.zakaz.ua/stores/default/categories/${category_id}/products/`;
  }
};

export const isLoaded = arr => Array.isArray(arr) && arr.length;

export const removeClassFromDescendants = (parent, className) => {
  const elemsClassName = parent.getElementsByClassName(className);
  Array.prototype.forEach.call(elemsClassName, elem =>
    elem.classList.remove(className)
  );
};

export const amountInCart = (cart, product) => {
  const found = cart.filter(item => product.ean === item.ean);
  return Array.isArray(found) && found.length ? found[0].cartAmount : 0;
};

export const formatPrice = price => {
  return price.toFixed(2);
};

export const truncate = (str, num) => {
  if (str.length > num) return str.slice(0, num > 3 ? num - 3 : num) + '...';
  return str;
};
