import initialState from './initialState';

const newProduct = (state = initialState.currentProduct, action) => {
  let newState;
  switch (action.type) {
    case 'SET_PRODUCT_INFO':
      newState = {
        ...state,
        ...action.value
      };
      return newState;
    case 'SET_PRODUCT_URL':
      newState = action.productUrl;
      return newState;
    default:
      return state;
  }
}

export default newProduct;