import initialState from './initialState';
import {FETCH_STUFF, RECEIVE_STUFF} from '../actions/actionTypes';

export default function products(state = initialState.products, action) {
  console.log(initialState.products, action)
  let newState;
  switch (action.type) {
    case FETCH_STUFF:
      console.log('FETCH_STUFF Action')
      return action;
    case RECEIVE_STUFF:
      newState = action.products;
      console.log('RECEIVE_STUFF Action')
      return newState;
    default:
      return state;
  }
}