import React from 'react';

let UpdateProductButton = (props) => {
  return (
    <button
      type="button"
      className="btn btn-success btn-sm"
      onClick={function() {
          props.handleButtonClick(props.productId, props.productUrl)
        }
      }
    >Purchase Now</button>
  );
}

export default UpdateProductButton;