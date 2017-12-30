import initialState from './initialState';

const newProduct = (state = initialState.currentProductTitle, action) => {
  switch (action.type) {
    case 'SET_PRODUCT_NAME':
      let newState = action.productName;
      return newState;
    default:
      return state;
  }
}

export default newProduct;