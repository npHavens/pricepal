import React from 'react';

export default class AddProductButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  // handleInputChange(e) {
  //   this.setState({
  //     value: e.target.value
  //   });
  // }

  render() {
    return (
     <div>
        <button
          className="btn btn-primary"
          id="qty-input"
          type="submit"
        >Add Product</button>
      </div>);
  }
}