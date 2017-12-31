import React from 'react';

let RemoveProductButton = (props) => {
  return (
    <button
      onClick={props.handleButtonClick}
      id={props.productId}
    >Remove</button>
  );
}

export default RemoveProductButton;