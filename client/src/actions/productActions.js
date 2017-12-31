import axios from 'axios';

const receiveProducts = (data) => {
  console.log('Receiving products')
  return {type: 'RECEIVE_PRODUCTS', products: data.data};
}

const getProducts = () => (dispatch, getState) => {
    console.log('Getting saved products');
    axios.get('/products')
    .then((res) => {
      dispatch(receiveProducts(res))
    })
};

const setInfo = (infoObj) => {
  console.log('setting product name')
  return {type: 'SET_PRODUCT_INFO', info: infoObj}
}

const setNewProductInfo = (event) => (dispatch, getState) => {
  dispatch(setInfo({[event.target.name]: event.target.value}))
}


const setProductUrl = (url) => {
  return {type: 'SET_PRODUCT_URL', productUrl: url}
}



const addProduct = () => {

}

export {receiveProducts, getProducts, setNewProductInfo, setInfo};