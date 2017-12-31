import React from 'react';
import { bindActionCreators } from 'redux';
import * as productActions from '../src/actions/productActions.js';
import { connect } from 'react-redux';

class TitleInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
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
            name="name"
            id="title-input"
            onChange={this.props.productActions.setNewProductInfo}
          />
        </div>
      </div>);
  }
}

const mapStateToProps = state => {
  console.log('STATE:', state)
  return {
    state
  }
};

const mapDispatchToProps = dispatch => {
  return {
    productActions: bindActionCreators(productActions, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TitleInput);