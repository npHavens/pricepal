import React from 'react';

export default class UrlInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
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
          className="Url-field"
          type="text"
          value={this.state.value}
        />
      </div>);
  }
}