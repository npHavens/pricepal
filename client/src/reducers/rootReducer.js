import {combineReducers} from 'redux';
import products from './productsReducer';
import newProduct from './newProductReducer';

const rootReducer = combineReducers({
  products,
  newProduct
});

export default rootReducer;