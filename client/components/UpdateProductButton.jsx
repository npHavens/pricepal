import React from 'react';

let UpdateProductButton = (props) => {
  return (
    <div className="form-group row">
      <button
        className="btn btn-primary center-block"
        id="update-product"
        type="submit"
        onClick={props.handleButtonClick}
      >Add Product</button>
    </div>
    );
  }


UpdateProductButton.propTypes = {
  handleButtonClick: React.PropTypes.func.isRequired
};

export default UpdateProductButton;