import initialState from './initialState';

export default function products(state = initialState.products, action) {
  let newState;
  switch (action.type) {
    case 'GET_PRODUCTS':
      console.log('GET_PRODUCTS Action')
      return action;
    case 'RECEIVE_PRODUCTS':
      newState = action.products;
      console.log('RECEIVE_PRODUCTS Action')
      return newState;
    default:
      return state;
  }
}