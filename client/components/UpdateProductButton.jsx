import React from 'react';

let UpdateProductButton = (props) => {
  return (
    <button
      onClick={props.handleButtonClick}
      id={props.productId}
    >Purchase Now</button>
  );
}

export default UpdateProductButton;