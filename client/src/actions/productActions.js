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

const setProductName = (name) => {
  return {type: 'SET_PRODUCT_NAME', productName: name}
}

const setProductUrl = (url) => {
  return {type: 'SET_PRODUCT_URL', productUrl: url}
}

const addProduct = () => {

}

export {receiveProducts, getProducts, setProductName};