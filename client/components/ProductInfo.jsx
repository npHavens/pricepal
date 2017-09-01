import React from 'react';

export default class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleInputChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  render() {
    return (
     <div>
        <input
          type="text"
          value={this.state.value}
        />
      </div>);
  }
}