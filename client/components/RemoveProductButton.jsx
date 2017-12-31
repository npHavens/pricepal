import React from 'react';
import { connect } from 'react-redux';

let RemoveProductButton = (props) => {
  return (
    <button
      onClick={props.handleButtonClick}
      id={props.productId}
    >Remove</button>
  );
}

export default RemoveProductButton;