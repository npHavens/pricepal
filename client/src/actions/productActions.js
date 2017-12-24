import * as types from './actionTypes';
import axios from 'axios';

function url() {
  return 'www.url.com';
}

export function receiveStuff(data) {
  console.log(data.data)
  return {type: types.RECEIVE_STUFF, products: data.data};
}

export function fetchStuff() {
  return dispatch => {
    console.log('Getting saved products');
    axios.get('http://localhost:3000/products')
    .then(function(res) {
      console.log(res.data)
      dispatch(receiveStuff(res))
    })

  };
}