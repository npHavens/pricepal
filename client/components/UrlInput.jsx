import React from 'react';

export default class UrlInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  handleInputChange(e) {
    this.props.handleUrlInputChange(e.target.value);
    this.setState({
      value: e.target.value
    });
  }

  render() {
    return (
     <div>
        <label htmlFor="url-input">Url</label>
        <input
          className="form-control"
          id="url-input"
          type="text"
          value={this.state.value}
          onChange={this.handleInputChange.bind(this)}
        />
      </div>);
  }
}