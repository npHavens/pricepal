import React from 'react';

let UpdateProductButton = (props) => {
  return (
    <button
      type="button"
      className="btn btn-success btn-sm"
      onClick={props.handleButtonClick}
    >Purchase Now</button>
    );
  }


UpdateProductButton.propTypes = {
  handleButtonClick: React.PropTypes.func.isRequired
};

export default UpdateProductButton;