import React from 'react';

export default class QtyInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     // value: ''
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
        <label htmlFor="qty-input">Quantity</label>
        <input
          className="form-control"
          id="qty-input"
          type="text"
          value={this.state.value}
        />
      </div>);
  }
}