import React from 'react';

export default class QtyInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     value: ''
    };
  }

  handleInputChange(e) {
    this.props.handleQtyInputChange(e.target.value);
    this.setState({
      value: e.target.value
    });
  }

  render() {
    return (
     <div className="form-group row">
        <label
          htmlFor="qty-input"
          className="control-label col-sm-4"
        >Quantity Purchased</label>
        <div className="col-sm-2">
          <input
            name="qty"
            id="qty-input"
            type="text"
            onChange={this.props.handleChange}
          />
        </div>
      </div>);
  }
}