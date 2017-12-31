import React from 'react';
import * as productActions from '../src/actions/productActions.js';

const AddProductButton = (props) => {
  return (
    <button
        id="add-product"
        onClick={props.handleClick}
      >Add Product</button>
  );
}

export default AddProductButton;