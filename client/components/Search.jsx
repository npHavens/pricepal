import React from 'react';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  handleInputChange(e) {
    this.props.handleSearchInputChange(e.target.value);
    this.setState({
      value: e.target.value
    });
  }

  render() {
    return (
     <div>
        <input
          className="search-field"
          type="text"
          value={this.state.value}
          onChange={this.handleInputChange.bind(this)}
        />
      </div>);
  }
}