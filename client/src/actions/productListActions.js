import axios from 'axios';

/*** Action Creators ***/

const receiveProducts = (data) => {
  console.log('Receiving products')
  return {type: 'RECEIVE_PRODUCTS', products: data.data};
}

/*** Product List Actions ***/

const getProducts = () => (dispatch, getState) => {
    console.log('Getting saved products');
    axios.get('/products')
    .then((res) => {
      dispatch(receiveProducts(res))
    })
};

const removeProduct = (event) => (dispatch, getState) => {
  console.log('Removing Product with ID:', event.target.id);
  axios.delete('/products', {params:{ id: event.target.id}})
  .then(function(res) {
    dispatch(getProducts());
  });
}

const updateProduct = (event) => (dispatch, getState) => {
  console.log('Updating Product with ID:', event.target.id);
  axios.put('/products', {id: event.target.id})
  .then(function(res) {
    dispatch(getProducts());
  });
}

export {
  receiveProducts,
  getProducts,
  removeProduct,
  updateProduct
};