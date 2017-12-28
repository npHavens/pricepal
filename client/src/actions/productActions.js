import axios from 'axios';

const receiveProducts = (data) => {
  console.log('Receiving products')
  return {type: 'RECEIVE_PRODUCTS', products: data.data};
}

const getProducts = () => {
  return dispatch => {
    console.log('Getting saved products');
    axios.get('/products')
    .then((res) => {
      dispatch(receiveProducts(res))
    })

  };
}

const setProductInfo = (field, value) => {
  return {type: 'SET_PRODUCT_INFO', field: field, value: value}
}

const addProduct = () => {

}

export {receiveProducts, getProducts};