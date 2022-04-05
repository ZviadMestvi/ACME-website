export const addToCart = product => {
  return {
    type: 'ADD_TO_CART',
    payload: product,
  };
};

export const changeQuantity = (name, quantity) => {
  return {
    type: 'CHANGE_QUANTITY',
    payload: { name, quantity },
  };
};

export const duplicateProductHandler = (name, quantity) => {
  return {
    type: 'DUPLICATE_PRODUCT_HANDLER',
    payload: { name, quantity },
  };
};

export const removeCartItem = value => {
  return {
    type: 'REMOVE_CART_ITEM',
    payload: value,
  };
};

export const toggleMobileMenu = () => {
  return {
    type: 'TOGGLE_MOBILE_MENU',
  };
};
