import axios from 'axios';

export function receiveProducts(data) {
  console.log('Receiving products')
  return {type: 'RECEIVE_PRODUCTS', products: data.data};
}

export function getProducts() {
  return dispatch => {
    console.log('Getting saved products');
    axios.get('http://localhost:3000/products')
    .then(function(res) {
      console.log(res.data)
      dispatch(receiveProducts(res))
    })

  };
}