import initialState from './initialState';

const products = (state = initialState, action) => {
  switch (action.type) {
    case 'RECEIVE_PRODUCTS':
      console.log('RECEIVE_PRODUCTS Action')
      //let newState = {};
      //newState.products = action.products;
      //return newState;
      let newState = state;
      console.log('newState', newState)
      return action.products;
    default:
      return state.products;
  }
}

export default products;