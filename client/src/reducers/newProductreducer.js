import initialState from './initialState';

const newProduct = (state = initialState.currentProduct, action) => {
  let newState;
  switch (action.type) {
    case 'SET_PRODUCT_INFO':
     console.log(state, action.info)
      newState = {
        ...state,
        ...action.info
      };
      console.log(newState)
      return newState;
    default:
      return state;
  }
}

export default newProduct;