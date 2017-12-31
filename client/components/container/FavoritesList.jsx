import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as productActions from '../../src/actions/productActions.js';
import ProductList from '../ProductList.jsx';

const mapStateToProps = state => {
  return {
    products: state.products
  }
};

const mapDispatchToProps = dispatch => {
  return {
    productActions: bindActionCreators(productActions, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);