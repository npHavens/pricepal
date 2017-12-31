import axios from 'axios';

/*** Action Creators ***/
import { getProducts } from './productListActions.js';

const setInfo = (infoObj) => {
  console.log('setting product info')
  return {type: 'SET_PRODUCT_INFO', info: infoObj}
}

/*** New Product Actions ***/
const setNewProductInfo = (event) => (dispatch, getState) => {
  dispatch(setInfo({[event.target.name]: event.target.value}))
}

const addProduct = (event) => (dispatch, getState) => {
  event.preventDefault();
  console.log('Adding Product')
  const productObj = getState().newProduct;
  axios.post('/products',
    {
      title: productObj.name,
      url: productObj.url,
      qtyPurchased: Number(productObj.qty)
    }).then(function(res) {
        dispatch(getProducts());
    }).catch(err => console.log('Error adding product:', err));
}

export {
  addProduct,
  setNewProductInfo
}