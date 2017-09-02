import React from 'react';

export default class TitleInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  handleInputChange(e) {
    this.props.handleTitleInputChange(e.target.value);
    this.setState({
      value: e.target.value
    });
  }

  render() {
    return (
      <div className="form-group row">
        <label
          className="control-label col-sm-2"
          htmlFor="title-input"
        >Title</label>
        <div className="col-sm-8">
          <input
            className="form-control"
            id="title-input"
            type="text"
            value={this.state.value}
            onChange={this.handleInputChange.bind(this)}
          />
        </div>
      </div>);
  }
}