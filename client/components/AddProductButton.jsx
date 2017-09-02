import React from 'react';

let AddProductButton = (props) => {
  return (
    <div className="form-group row">
      <button
        className="btn btn-primary center-block btn-lg"
        id="add-product"
        type="submit"
        onClick={props.handleButtonClick}
      >Add Product</button>
    </div>
  );
}

AddProductButton.propTypes = {
  handleButtonClick: React.PropTypes.func.isRequired
};

export default AddProductButton;