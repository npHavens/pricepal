import React from 'react';

export default class AddProductButton extends React.Component {
  constructor(props) {
    super(props);
    //console.log(props)
    this.state = {
    };
  }

  render() {
    return (
     <div>
        <button
          className="btn btn-primary"
          id="qty-input"
          type="submit"
          onClick={this.props.handleButtonClick}
        >Add Product</button>
      </div>);
  }
}