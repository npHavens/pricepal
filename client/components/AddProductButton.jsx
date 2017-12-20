import React from 'react';

let AddProductButton = (props) => {
  return (
    <div className="form-group row">
      <button
        className="btn btn-primary center-block"
        id="add-product"
        type="submit"
        onClick={props.handleButtonClick}
      >Add Product</button>
    </div>
  );
}

export default AddProductButton;