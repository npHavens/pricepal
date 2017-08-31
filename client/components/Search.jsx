import React from 'react';

export default class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
     // value: ''
    };
  }

  render() {
    return (
     <div>
        <input
          className="search-field"
          type="text"
          // value={this.state.value}
        />
      </div>);
  }
}