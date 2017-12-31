import React from 'react';
import { connect } from 'react-redux';

const AddProductButton = (props) => {
  return (
    <button
        id="add-product"
        onClick={props.handleClick}
      >Add Product</button>
  );
}

export default AddProductButton;