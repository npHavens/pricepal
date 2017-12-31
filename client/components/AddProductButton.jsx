import React from 'react';
import * as productActions from '../src/actions/productActions.js';

const AddProductButton = (props) => {
  return (
    <div
        id="add-product"
        onClick={props.handleClick}
      >Add Product</div>
  );
}

export default AddProductButton;