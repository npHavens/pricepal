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
     <div>
        <label htmlFor="title-input">Title</label>
        <input
          className="form-control"
          id="title-input"
          type="text"
          value={this.state.value}
          onChange={this.handleInputChange.bind(this)}
        />
      </div>);
  }
}