import axios from 'axios';

/*** Action Creators ***/

const receiveProducts = (data) => {
  console.log('Receiving products')
  return {type: 'RECEIVE_PRODUCTS', products: data.data};
}

const setInfo = (infoObj) => {
  console.log('setting product name')
  return {type: 'SET_PRODUCT_INFO', info: infoObj}
}


/*** Product Actions ***/

const getProducts = () => (dispatch, getState) => {
    console.log('Getting saved products');
    axios.get('/products')
    .then((res) => {
      dispatch(receiveProducts(res))
    })
};

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
  setNewProductInfo,
  setInfo,
  addProduct,
  removeProduct,
  updateProduct
};