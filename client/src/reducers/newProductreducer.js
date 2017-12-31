import initialState from './initialState';

const newProduct = (state = initialState.currentProduct, action) => {
  let newState;
  switch (action.type) {
    case 'SET_PRODUCT_INFO':
      newState = {
        ...state,
        ...action.info
      };
      return newState;
    default:
      return state;
  }
}

export default newProduct;