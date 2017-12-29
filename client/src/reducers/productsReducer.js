import initialState from './initialState';

const products = (state = initialState.currentProductTitle, action) => {
  switch (action.type) {
    case 'RECEIVE_PRODUCTS':
      console.log('RECEIVE_PRODUCTS Action')
      let newState = action.products;
      return newState;
    default:
      return state;
  }
}

export default products;