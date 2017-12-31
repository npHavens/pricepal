import React from 'react';
import * as productActions from '../src/actions/productActions.js';

let AddProductButton = (props) => {

  return (
    <div className="form-group row">
      <button
        className="btn btn-primary center-block"
        id="add-product"
        type="submit"
        onClick={productActions.setProductUrl}
      >Add Product</button>
    </div>
  );
}

export default AddProductButton;