import React from 'react';
import * as productActions from '../src/actions/productActions.js';

export default class TitleInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  handleInputChange(e) {
    productActions.setProductName(e.target.value);
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
            onChange={this.handleInputChange.bind(this)}
          />
        </div>
      </div>);
  }
}