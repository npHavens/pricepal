import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as productListActions from '../../src/actions/productListActions.js';
import ProductList from '../ProductList.jsx';

const mapStateToProps = ({ products }) => {
  return {
    products: products
  }
};

const mapDispatchToProps = dispatch => {
  return {
    productActions: bindActionCreators(productListActions, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);