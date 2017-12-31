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
      <div className="form-group row">
        <label
          htmlFor="url-input"
          className="control-label col-sm-2"
        >Url</label>
        <div className="col-sm-8">
          <input
            name="url"
            id="url-input"
            type="text"
            onChange={this.props.handleChange}
          />
        </div>
      </div>);
  }
}