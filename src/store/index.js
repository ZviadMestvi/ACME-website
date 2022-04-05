import { createStore } from 'redux';
import giftCard from '../assets/products/giftCard.jpg';
import tinCup from '../assets/products/tinCup.jpg';
import blueBackpack from '../assets/products/blue-backpack.jpg';
import greenBackpack from '../assets/products/green-backpack.jpg';
import whiteTent from '../assets/products/whiteTent.jpg';

const PRODUCTS_DATA = [
  {
    name: 'Gift Card',
    price: 25,
    image: giftCard,
    category: 'Gift Cards',
  },
  {
    name: 'Tin Coffee Tumbler',
    price: 35,
    image: tinCup,
    category: 'Accessories',
  },
  {
    name: 'Blue Canvas Pack',
    price: 145,
    image: blueBackpack,
    category: 'Packs',
  },
  {
    name: 'Green Canvas Pack',
    price: 125,
    image: greenBackpack,
    category: 'Packs',
  },
  {
    name: 'White Tent',
    price: 200,
    image: whiteTent,
    category: 'Tents',
  },
];

const FEATURED_ITEM = {
  name: 'White Tent',
  price: 200,
  image: whiteTent,
  category: 'Tents',
};

const initialState = {
  cartProducts: [],
  products: PRODUCTS_DATA,
  featuredItem: FEATURED_ITEM,
  mobileMenuVis: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cartProducts: [...state.cartProducts, action.payload],
      };
    case 'CHANGE_QUANTITY':
      const index = state.cartProducts.findIndex(
        product => product.name === action.payload.name
      );
      const newChangedArray = [...state.cartProducts];

      newChangedArray[index].quantity = action.payload.quantity;
      return {
        ...state,
        cartProducts: newChangedArray,
      };
    case 'DUPLICATE_PRODUCT_HANDLER':
      const i = state.cartProducts.findIndex(
        product => product.name === action.payload.name
      );
      const changedArray = [...state.cartProducts];

      changedArray[i].quantity =
        +changedArray[i].quantity + action.payload.quantity;
      return {
        ...state,
        cartProducts: changedArray,
      };
    case 'REMOVE_CART_ITEM':
      return {
        ...state,
        cartProducts: state.cartProducts.filter(
          product => product.name !== action.payload
        ),
      };
    case 'TOGGLE_MOBILE_MENU':
      return {
        ...state,
        mobileMenuVis: !state.mobileMenuVis,
      };
    default:
      return state;
  }
};

const store = createStore(rootReducer);

export default store;
