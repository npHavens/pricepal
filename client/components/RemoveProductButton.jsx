import React from 'react';

let RemoveProductButton = (props) => {
  return (
    <button
      type="button"
      className="btn btn-danger btn-sm"
      onClick={function() {
          props.handleButtonClick(props.productId)
        }
      }
    >Remove</button>
  );
}

export default RemoveProductButton;