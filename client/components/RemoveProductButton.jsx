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

RemoveProductButton.propTypes = {
  handleButtonClick: React.PropTypes.func.isRequired
};

export default RemoveProductButton;