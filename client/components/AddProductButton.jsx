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
     <div className="form-group row">
        <button
          className="btn btn-primary center-block"
          id="qty-input"
          type="submit"
          onClick={this.props.handleButtonClick}
        >Add Product</button>
      </div>);
  }
}